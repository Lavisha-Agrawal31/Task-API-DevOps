output "vpc_id" {
  value = aws_vpc.custom_vpc.id
}

output "subnet_id" {
  value = aws_subnet.public_subnet.id
}

output "instance_public_ip" {
  value = aws_instance.task_api_instance.public_ip
}

output "api_url" {
  value = "http://${aws_instance.task_api_instance.public_ip}:5000"
}