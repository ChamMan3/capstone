Rails.application.config.middleware.use OmniAuth::Builder do
    provider :developer if Rails.env.development?
    provider :genius, ENV['GENIUS_CLIENT_ID'], ENV['GENIUS_CLIENT_SECRET']
  end