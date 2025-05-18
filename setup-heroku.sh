#!/bin/bash

# This script helps set up and deploy your portfolio to Heroku
# Make sure to run 'chmod +x setup-heroku.sh' to make it executable

echo "Setting up your portfolio for Heroku deployment..."

# Check if Heroku CLI is installed
if ! command -v heroku &> /dev/null; then
    echo "Heroku CLI is not installed. Please install it first:"
    echo "npm install -g heroku"
    exit 1
fi

# Check if user is logged in to Heroku
heroku whoami &> /dev/null
if [ $? -ne 0 ]; then
    echo "Please log in to Heroku:"
    heroku login
fi

# Ask for app name
read -p "Enter your Heroku app name (e.g., imani-frith-portfolio): " APP_NAME

# Create Heroku app
echo "Creating Heroku app: $APP_NAME"
heroku create $APP_NAME

# Set buildpack
echo "Setting buildpacks..."
heroku buildpacks:set heroku/nodejs -a $APP_NAME

# Set environment variables
echo "Setting environment variables..."
heroku config:set NODE_ENV=production -a $APP_NAME

# Initialize git if not already initialized
if [ ! -d .git ]; then
    echo "Initializing git repository..."
    git init
    git add .
    git commit -m "Initial commit for Heroku deployment"
fi

# Add Heroku remote
echo "Adding Heroku remote..."
heroku git:remote -a $APP_NAME

echo "Setup complete! To deploy your app, run:"
echo "git push heroku main"
echo ""
echo "After deployment, you can open your app with:"
echo "heroku open -a $APP_NAME"
