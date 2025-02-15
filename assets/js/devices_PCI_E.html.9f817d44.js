"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[97357],{29271:(e,o,t)=>{t.r(o),t.d(o,{comp:()=>r,data:()=>d});var a=t(6254);const i={},r=(0,t(32991).A)(i,[["render",function(e,o){const t=(0,a.g2)("RouteLink");return(0,a.uX)(),(0,a.CE)("div",null,[o[8]||(o[8]=(0,a.Lk)("h1",{id:"weten-pci-e",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#weten-pci-e"},[(0,a.Lk)("span",null,"WETEN PCI E")])],-1)),(0,a.Lk)("table",null,[o[7]||(o[7]=(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th"),(0,a.Lk)("th")])],-1)),(0,a.Lk)("tbody",null,[o[2]||(o[2]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Model"),(0,a.Lk)("td",null,"PCI E")],-1)),(0,a.Lk)("tr",null,[o[1]||(o[1]=(0,a.Lk)("td",null,"Vendor",-1)),(0,a.Lk)("td",null,[(0,a.bF)(t,{to:"/supported-devices/#v=WETEN"},{default:(0,a.k6)((()=>o[0]||(o[0]=[(0,a.eW)("WETEN")]))),_:1})])]),o[3]||(o[3]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Description"),(0,a.Lk)("td",null,"Remote Control PCI E Card for PC")],-1)),o[4]||(o[4]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Exposes"),(0,a.Lk)("td",null,"switch (state), restart_mode, rf_pairing, rf_remote_control, buzzer_feedback, power_on_behavior, child_lock")],-1)),o[5]||(o[5]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Picture"),(0,a.Lk)("td",null,[(0,a.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/PCI-E.png",alt:"WETEN PCI E"})])],-1)),o[6]||(o[6]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"White-label"),(0,a.Lk)("td",null,"Weten Tuya PRO")],-1))])]),o[9]||(o[9]=(0,a.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing"><span>Pairing</span></a></h3><p>Long press the reset button for 5s until the LED indicator flashes three times, which means the device has entered pairing mode. If buzzer feedback is on then you&#39;ll also hear 3 short beeps. The reset button can be found on the PCIe card.</p><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch"><span>Switch</span></a></h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="restart-mode-enum" tabindex="-1"><a class="header-anchor" href="#restart-mode-enum"><span>Restart mode (enum)</span></a></h3><p>Restart Mode. Value can be found in the published state on the <code>restart_mode</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;restart_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>restart</code>, <code>force restart</code>, <code>–</code>.</p><h3 id="rf-pairing-binary" tabindex="-1"><a class="header-anchor" href="#rf-pairing-binary"><span>Rf pairing (binary)</span></a></h3><p>Enables/disables RF 433 remote pairing mode. Value can be found in the published state on the <code>rf_pairing</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;rf_pairing&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> rf pairing is ON, if <code>OFF</code> OFF.</p><h3 id="rf-remote-control-binary" tabindex="-1"><a class="header-anchor" href="#rf-remote-control-binary"><span>Rf remote control (binary)</span></a></h3><p>Enables/disables RF 433 remote control. Value can be found in the published state on the <code>rf_remote_control</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;rf_remote_control&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> rf remote control is ON, if <code>OFF</code> OFF.</p><h3 id="buzzer-feedback-binary" tabindex="-1"><a class="header-anchor" href="#buzzer-feedback-binary"><span>Buzzer feedback (binary)</span></a></h3><p>Enable buzzer feedback.. Value can be found in the published state on the <code>buzzer_feedback</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;buzzer_feedback&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> buzzer feedback is ON, if <code>OFF</code> OFF.</p><h3 id="power-on-behavior-enum" tabindex="-1"><a class="header-anchor" href="#power-on-behavior-enum"><span>Power on behavior (enum)</span></a></h3><p>Power On Behavior. Value can be found in the published state on the <code>power_on_behavior</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;power_on_behavior&quot;: NEW_VALUE}</code>. The possible values are: <code>on</code>, <code>off</code>.</p><h3 id="child-lock-binary" tabindex="-1"><a class="header-anchor" href="#child-lock-binary"><span>Child lock (binary)</span></a></h3><p>Enables/disables physical input on the device. Value can be found in the published state on the <code>child_lock</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;child_lock&quot;: NEW_VALUE}</code>. If value equals <code>LOCK</code> child lock is ON, if <code>UNLOCK</code> OFF.</p>',18))])}]]),d=JSON.parse('{"path":"/devices/PCI_E.html","title":"WETEN PCI E control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"WETEN PCI E control via MQTT","description":"Integrate your WETEN PCI E via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2024-01-31T20:08:00.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]}]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Switch","slug":"switch","link":"#switch","children":[]},{"level":3,"title":"Restart mode (enum)","slug":"restart-mode-enum","link":"#restart-mode-enum","children":[]},{"level":3,"title":"Rf pairing (binary)","slug":"rf-pairing-binary","link":"#rf-pairing-binary","children":[]},{"level":3,"title":"Rf remote control (binary)","slug":"rf-remote-control-binary","link":"#rf-remote-control-binary","children":[]},{"level":3,"title":"Buzzer feedback (binary)","slug":"buzzer-feedback-binary","link":"#buzzer-feedback-binary","children":[]},{"level":3,"title":"Power on behavior (enum)","slug":"power-on-behavior-enum","link":"#power-on-behavior-enum","children":[]},{"level":3,"title":"Child lock (binary)","slug":"child-lock-binary","link":"#child-lock-binary","children":[]}]}],"git":{"updatedTime":1739626513000},"filePathRelative":"devices/PCI_E.md"}')}}]);