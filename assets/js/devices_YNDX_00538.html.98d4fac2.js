"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[33228],{33912:(e,o,t)=>{t.r(o),t.d(o,{comp:()=>n,data:()=>a});var d=t(6254);const i={},n=(0,t(32991).A)(i,[["render",function(e,o){const t=(0,d.g2)("RouteLink");return(0,d.uX)(),(0,d.CE)("div",null,[o[8]||(o[8]=(0,d.Lk)("h1",{id:"yandex-yndx-00538",tabindex:"-1"},[(0,d.Lk)("a",{class:"header-anchor",href:"#yandex-yndx-00538"},[(0,d.Lk)("span",null,"Yandex YNDX_00538")])],-1)),(0,d.Lk)("table",null,[o[6]||(o[6]=(0,d.Lk)("thead",null,[(0,d.Lk)("tr",null,[(0,d.Lk)("th"),(0,d.Lk)("th")])],-1)),(0,d.Lk)("tbody",null,[o[2]||(o[2]=(0,d.Lk)("tr",null,[(0,d.Lk)("td",null,"Model"),(0,d.Lk)("td",null,"YNDX_00538")],-1)),(0,d.Lk)("tr",null,[o[1]||(o[1]=(0,d.Lk)("td",null,"Vendor",-1)),(0,d.Lk)("td",null,[(0,d.bF)(t,{to:"/supported-devices/#v=Yandex"},{default:(0,d.k6)((()=>o[0]||(o[0]=[(0,d.eW)("Yandex")]))),_:1})])]),o[3]||(o[3]=(0,d.Lk)("tr",null,[(0,d.Lk)("td",null,"Description"),(0,d.Lk)("td",null,"Double relay")],-1)),o[4]||(o[4]=(0,d.Lk)("tr",null,[(0,d.Lk)("td",null,"Exposes"),(0,d.Lk)("td",null,"switch (state), power_on_behavior, power_type, interlock, switch_type, action")],-1)),o[5]||(o[5]=(0,d.Lk)("tr",null,[(0,d.Lk)("td",null,"Picture"),(0,d.Lk)("td",null,[(0,d.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/YNDX_00538.png",alt:"Yandex YNDX_00538"})])],-1))])]),o[9]||(o[9]=(0,d.Lk)("h2",{id:"options",tabindex:"-1"},[(0,d.Lk)("a",{class:"header-anchor",href:"#options"},[(0,d.Lk)("span",null,"Options")])],-1)),(0,d.Lk)("p",null,[(0,d.Lk)("em",null,[(0,d.bF)(t,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,d.k6)((()=>o[7]||(o[7]=[(0,d.eW)("How to use device type specific configuration")]))),_:1})])]),o[10]||(o[10]=(0,d.Fv)('<ul><li><code>state_action</code>: State actions will also be published as &#39;action&#39; when true (default false). The value must be <code>true</code> or <code>false</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="switch-1-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-1-endpoint"><span>Switch (1 endpoint)</span></a></h3><p>The current state of this switch is in the published state under the <code>state_1</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_1&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_1&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_1&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_1&quot;: &quot;&quot;}</code>.</p><h4 id="on-with-timed-off" tabindex="-1"><a class="header-anchor" href="#on-with-timed-off"><span>On with timed off</span></a></h4><p>When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property <code>on_time</code> to the payload which is the time in seconds the state should remain on. Additionally an <code>off_wait_time</code> property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands. Support depends on the switch firmware. Some devices might require both <code>on_time</code> and <code>off_wait_time</code> to work Examples : <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300}</code>, <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300, &quot;off_wait_time&quot;: 120}</code>.</p><h3 id="switch-2-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-2-endpoint"><span>Switch (2 endpoint)</span></a></h3><p>The current state of this switch is in the published state under the <code>state_2</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_2&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_2&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_2&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_2&quot;: &quot;&quot;}</code>.</p><h4 id="on-with-timed-off-1" tabindex="-1"><a class="header-anchor" href="#on-with-timed-off-1"><span>On with timed off</span></a></h4><p>When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property <code>on_time</code> to the payload which is the time in seconds the state should remain on. Additionally an <code>off_wait_time</code> property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands. Support depends on the switch firmware. Some devices might require both <code>on_time</code> and <code>off_wait_time</code> to work Examples : <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300}</code>, <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300, &quot;off_wait_time&quot;: 120}</code>.</p><h3 id="power-on-behavior-enum-1-endpoint" tabindex="-1"><a class="header-anchor" href="#power-on-behavior-enum-1-endpoint"><span>Power-on behavior (enum, 1 endpoint)</span></a></h3><p>Controls the behavior when the device is powered on after power loss. Value can be found in the published state on the <code>power_on_behavior_1</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;power_on_behavior_1&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;power_on_behavior_1&quot;: NEW_VALUE}</code>. The possible values are: <code>off</code>, <code>on</code>, <code>toggle</code>, <code>previous</code>.</p><h3 id="power-on-behavior-enum-2-endpoint" tabindex="-1"><a class="header-anchor" href="#power-on-behavior-enum-2-endpoint"><span>Power-on behavior (enum, 2 endpoint)</span></a></h3><p>Controls the behavior when the device is powered on after power loss. Value can be found in the published state on the <code>power_on_behavior_2</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;power_on_behavior_2&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;power_on_behavior_2&quot;: NEW_VALUE}</code>. The possible values are: <code>off</code>, <code>on</code>, <code>toggle</code>, <code>previous</code>.</p><h3 id="power-type-enum" tabindex="-1"><a class="header-anchor" href="#power-type-enum"><span>Power type (enum)</span></a></h3><p>Power supply type. Value can be found in the published state on the <code>power_type</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;power_type&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;power_type&quot;: NEW_VALUE}</code>. The possible values are: <code>full</code>, <code>low</code>, <code>medium</code>, <code>high</code>.</p><h3 id="interlock-binary" tabindex="-1"><a class="header-anchor" href="#interlock-binary"><span>Interlock (binary)</span></a></h3><p>Interlock. Value can be found in the published state on the <code>interlock</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;interlock&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;interlock&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> interlock is ON, if <code>OFF</code> OFF.</p><h3 id="switch-type-enum-1-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-type-enum-1-endpoint"><span>Switch type (enum, 1 endpoint)</span></a></h3><p>External switch type 1. Value can be found in the published state on the <code>switch_type_1</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;switch_type_1&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;switch_type_1&quot;: NEW_VALUE}</code>. The possible values are: <code>rocker</code>, <code>button</code>, <code>decoupled</code>.</p><h3 id="switch-type-enum-2-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-type-enum-2-endpoint"><span>Switch type (enum, 2 endpoint)</span></a></h3><p>External switch type 2. Value can be found in the published state on the <code>switch_type_2</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;switch_type_2&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;switch_type_2&quot;: NEW_VALUE}</code>. The possible values are: <code>rocker</code>, <code>button</code>, <code>decoupled</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>on_b1</code>, <code>on_b2</code>, <code>off_b1</code>, <code>off_b2</code>, <code>toggle_b1</code>, <code>toggle_b2</code>.</p>',24))])}]]),a=JSON.parse('{"path":"/devices/YNDX_00538.html","title":"Yandex YNDX_00538 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Yandex YNDX_00538 control via MQTT","description":"Integrate your Yandex YNDX_00538 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2024-11-30T20:27:20.000Z"},"headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Switch (1 endpoint)","slug":"switch-1-endpoint","link":"#switch-1-endpoint","children":[]},{"level":3,"title":"Switch (2 endpoint)","slug":"switch-2-endpoint","link":"#switch-2-endpoint","children":[]},{"level":3,"title":"Power-on behavior (enum, 1 endpoint)","slug":"power-on-behavior-enum-1-endpoint","link":"#power-on-behavior-enum-1-endpoint","children":[]},{"level":3,"title":"Power-on behavior (enum, 2 endpoint)","slug":"power-on-behavior-enum-2-endpoint","link":"#power-on-behavior-enum-2-endpoint","children":[]},{"level":3,"title":"Power type (enum)","slug":"power-type-enum","link":"#power-type-enum","children":[]},{"level":3,"title":"Interlock (binary)","slug":"interlock-binary","link":"#interlock-binary","children":[]},{"level":3,"title":"Switch type (enum, 1 endpoint)","slug":"switch-type-enum-1-endpoint","link":"#switch-type-enum-1-endpoint","children":[]},{"level":3,"title":"Switch type (enum, 2 endpoint)","slug":"switch-type-enum-2-endpoint","link":"#switch-type-enum-2-endpoint","children":[]},{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]}]}],"git":{"updatedTime":1739626513000},"filePathRelative":"devices/YNDX_00538.md"}')}}]);