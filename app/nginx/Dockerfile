FROM nginx:latest

# Copy the main configuration file
COPY nginx.conf /etc/nginx/nginx.conf

# Copy the server block configuration
COPY conf.d/ /etc/nginx/conf.d/

EXPOSE 80
