import React        from 'react';
import ReactDOM     from 'react-dom';
import ProbeControl from '..';

// Load CSS
require('normalize.css');

let crossHair = true,
    renderMethod = 'XY';

const
    callbacks = {
        probeChange: [],
        lineReady: [],
    },
    probeValue = [1,2,4],
    imageBuilder = {
        getProbe() {
            return probeValue;
        },
        onProbeChange(c) {
            callbacks.probeChange.push(c);
            return null;
        },
        onProbeLineReady(c) {
            callbacks.lineReady.push(c);
            return null;
        },
        setRenderMethod(m) {
            renderMethod = m;
        },
        getRenderMethod() {
            return renderMethod;
        },
        getRenderMethods() {
            return ['XY', 'XZ', 'YZ'];
        },
        render() {
        },
        setProbe(i,j,k){
            probeValue[0] = i;
            probeValue[1] = j;
            probeValue[2] = k;
            callbacks.probeChange.forEach( cb => {
                cb(probeValue);
            });
        },
        setCrossHairEnable(e) {
            crossHair = !!e;
        },
        isCrossHairEnabled() {
            return crossHair;
        },
        isRenderMethodMutable() {
            return true;
        },
        getFieldValueAtProbeLocation() {
            return Math.random();
        },
        metadata: {
            dimensions: [10,20,30],
        },
    },
    imageBuilders = {},
    container = document.querySelector('.content');


ReactDOM.render(
    React.createElement(
        ProbeControl,
        { imageBuilder, imageBuilders }),
    container);

document.body.style.margin = '10px';
