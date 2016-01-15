class AwsController < ApplicationController
  def s3_access_token
    @upload_type = params[:upload_type]
    render json: {
      policy:    s3_upload_policy,
      signature: s3_upload_signature,
      key:       Rails.application.secrets.aws_access_key_id
    }
  end

protected

  def s3_upload_policy
    @policy ||= create_s3_upload_policy
  end

  def create_s3_upload_policy
    bucket = Rails.application.secrets.aws_s3_bucket
    length = 12 * 1024 * 1024

    Base64.encode64(
      {
        "expiration" => 1.hour.from_now.utc.xmlschema,
        "conditions" => [
          { "bucket" =>  bucket },
          [ "starts-with", "$key", "" ],
          { "acl" => "public-read" },
          [ "starts-with", "$Content-Type", "" ],
          [ "content-length-range", 0, length ]
        ]
      }.to_json).gsub(/\n/,'')
  end

  def s3_upload_signature
    Base64.encode64(OpenSSL::HMAC.digest(OpenSSL::Digest::Digest.new('sha1'), Rails.application.secrets.aws_secret_access_key, s3_upload_policy)).gsub("\n","")
  end
end