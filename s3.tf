provider "aws" {
  region = "us-east-2" // The region for the S3 buckets and the CloudFront distribution
}

module "website" {
  source  = "github.com/JordanTheJet/S3-cloudfront-deploy"
  # insert the 1 required variable here
  domain = var.domain
}

# resource "aws_s3_bucket_policy" "magical" {
#   bucket = "magicalnailsmilwaukee.com"
# }
# resource "aws_s3_bucket" "magicalwww" {
#   bucket = "www.magicalnailsmilwaukee.com"
# }
# resource "aws_s3_bucket" "magical" {
#   bucket = "magicalnailsmilwaukee.com"
# }
# resource "aws_s3_bucket_policy" "magicalwww" {
#   bucket = "www.magicalnailsmilwaukee.com"
# }