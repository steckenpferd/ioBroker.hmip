![Logo](admin/homematic.png)
# ioBroker HomeMatic IP Cloud AccessPoint Adapter
=================

[![NPM version](http://img.shields.io/npm/v/iobroker.hmip.svg)](https://www.npmjs.com/package/iobroker.hmip)
[![Downloads](https://img.shields.io/npm/dm/iobroker.hmip.svg)](https://www.npmjs.com/package/iobroker.hmip)
[![Build Status](https://travis-ci.org/iobroker-community-adapters/ioBroker.hmip.svg?branch=master)](https://travis-ci.org/iobroker-community-adapters/ioBroker.hmip.svg?branch=master)

[![NPM](https://nodei.co/npm/iobroker.hmip.png?downloads=true)](https://nodei.co/npm/iobroker.hmip/) [![Greenkeeper badge](https://badges.greenkeeper.io/iobroker-community-adapters/ioBroker.hmip.svg)](https://greenkeeper.io/)

## Description
This adapter allows to Communicate with a HomaticIP CloudAccessPoint via the Rest API of the Homatic Cloud

## Installation
This Adapter needs node-js in version >= 8.0

## Info
At the Moment only a few Devices are supported.

I will improve it, but it will take time. For not working devices, please create an issue (one per device).
Then switch adapter logging to silly mode and add the json of the device wich is printed to the log.
I may also need a json of a state change.

## Included Devices

    BRAND_SWITCH_MEASURING
    FULL_FLUSH_SWITCH_MEASURING
    PLUGABLE_SWITCH_MEASURING
    PLUGABLE_SWITCH
    BRAND_WALL_MOUNTED_THERMOSTAT
    WALL_MOUNTED_THERMOSTAT_PRO
    TEMPERATURE_HUMIDITY_SENSOR_DISPLAY
    HEATING_THERMOSTAT
    SHUTTER_CONTACT
    SHUTTER_CONTACT_MAGNETIC
    BRAND_DIMMER
    PLUGGABLE_DIMMER
    PUSH_BUTTON
    PUSH_BUTTON_6
    OPEN_COLLECTOR_8_MODULE
    REMOTE_CONTROL_8
    BRAND_SHUTTER
    MOTION_DETECTOR_INDOOR
    SMOKE_DETECTOR

## Settings
* specify the your SGTIN and the PIN of your Accesspoint, and validate via press of the blue Button. This will create a Authentication token.

## Thanks

to coreGreenberet for his python lib (https://github.com/coreGreenberet/homematicip-rest-api)

## Changelog

### 0.0.3
* (jogibear9988) bugfixes and more devices 

### 0.0.2
* (jogibear9988) bugfixes, more devices and initial support of groups

### 0.0.1
* (jogibear9988) initial release

## License
The MIT License (MIT)

Copyright (c) 2018 @@Author@@ <@@email@@>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
