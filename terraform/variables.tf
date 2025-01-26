variable "aws_region" {
    default = "ap-south-1"
}

variable "availability_zone" {
    default = "ap-south-1a"
}

variable "ami_id" {
  default = "ami-00bb6a80f01f03502" #Ubuntu
}

variable "instance_type" {
  default = "t2.micro"
}