import React from 'react';
import {createDevTools} from 'redux-devtools';
import DockMonitor from 'redux-devtools-dock-monitor';
import LogMonitor from 'redux-devtools-log-monitor';

const DT = createDevTools(
    <DockMonitor toggleVisibilityKey='Ctrl-h'
                 changePositionKey='Ctrl-q'
                 defaultIsVisible={true}
    >
        <LogMonitor theme='tomorrow'/>
    </DockMonitor>
);

export default DT;
