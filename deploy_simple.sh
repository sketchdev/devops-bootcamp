#!/bin/bash -xe

# Set your username/userid here
# !!! CASE matters; make it all lowercase !!!
BOOTCAMP_USER_ID=workshopuser#


DEPLOYMENT_MOUNT="../deploy"
DEPLOYMENT_DIR="$DEPLOYMENT_MOUNT/$BOOTCAMP_USER_ID/"

# Figure out if linux/mac or windows
case `uname -s` in
    Linux*)     type=mount;;
    Darwin*)    type=mount;;
    CYGWIN_NT*) type=mount;;
    *)          type=manual
esac

# Ensure deployment folder is ready
if [ ! -d $DEPLOYMENT_DIR ]; then
  if [ "$type" == "mount" ]; then
    mkdir -p $DEPLOYMENT_MOUNT
    apt-get update
    apt-get install -y cifs-utils
    mount -t cifs //webserver.local/deploy $DEPLOYMENT_MOUNT -o rw,user=devopssamba,pass=devopsbootcampshare
  else
    echo ""
    echo "If this is a Windows-based machine, please ensure that the S:\ drive is mapped and loaded to the deployment server and try again."
    echo ""
    exit 2
  fi
fi

npm install
tar -czf ../deployment.tgz .
mv ../deployment.tgz $DEPLOYMENT_DIR
