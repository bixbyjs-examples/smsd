/**
 * Module dependencies.
 */
var IoC = require('electrolyte'),
    crane = require('crane'),
    bootable = require('bootable');

// Configure IoC container with required components.
IoC.use('handlers', IoC.node(__dirname + '/handlers'));
IoC.use(IoC.node(__dirname + '/components'));
IoC.use(require('bixby-crane'));
IoC.use(require('bixby-common'));

// Initialize a bootable Express app.
var app = bootable(crane());
app.phase(bootable.di.initializers(__dirname + '/init'));
app.phase(bootable.di.routes(__dirname + '/queues'));
app.phase(IoC.create('boot/dispatch'));
app.phase(IoC.create('adapter'));
app.phase(IoC.create('boot/subscribe'));

module.exports = app;
