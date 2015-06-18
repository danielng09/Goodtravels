# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  image_url       :text
#

class User < ActiveRecord::Base
  def self.truncate_me!
    ActiveRecord::Base.connection.execute("ALTER TABLE #{self.table_name} AUTO_INCREMENT = 1")
  end

  validates :username, :password_digest, :session_token, presence: true
  validates :username, uniqueness: true
  validate :ensure_session_token
  after_initialize :ensure_session_token, :set_default_profile
  has_many :reviews
  has_many :activity_wants, through: :wants, source: :activity
  has_many :wants

  attr_reader :password

  def self.find_by_credentials(username, password)
    user = User.find_by_username(username)
    if user && user.is_password?(password)
      user
    else
      nil
    end
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64
  end

  def is_password?(password)
    BCrypt::Password.new(password_digest).is_password?(password)
  end

  def reset_session_token!
      self.session_token = User.generate_session_token
      self.save!
      self.session_token
  end

  def set_default_profile
    unless self.image_url
      self.image_url = 'http://res.cloudinary.com/ds6oys8ca/image/upload/v1434519521/brett_b3orzt.png'
    end
  end

  private
  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end
end
