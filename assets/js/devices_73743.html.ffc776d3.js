"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[86356],{58455:(e,a,t)=>{t.r(a),t.d(a,{comp:()=>l,data:()=>i});var n=t(6254);const s={},l=(0,t(32991).A)(s,[["render",function(e,a){const t=(0,n.g2)("RouteLink");return(0,n.uX)(),(0,n.CE)("div",null,[a[11]||(a[11]=(0,n.Lk)("h1",{id:"sylvania-73743",tabindex:"-1"},[(0,n.Lk)("a",{class:"header-anchor",href:"#sylvania-73743"},[(0,n.Lk)("span",null,"Sylvania 73743")])],-1)),(0,n.Lk)("table",null,[a[6]||(a[6]=(0,n.Lk)("thead",null,[(0,n.Lk)("tr",null,[(0,n.Lk)("th"),(0,n.Lk)("th")])],-1)),(0,n.Lk)("tbody",null,[a[2]||(a[2]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Model"),(0,n.Lk)("td",null,"73743")],-1)),(0,n.Lk)("tr",null,[a[1]||(a[1]=(0,n.Lk)("td",null,"Vendor",-1)),(0,n.Lk)("td",null,[(0,n.bF)(t,{to:"/supported-devices/#v=Sylvania"},{default:(0,n.k6)((()=>a[0]||(a[0]=[(0,n.eW)("Sylvania")]))),_:1})])]),a[3]||(a[3]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Description"),(0,n.Lk)("td",null,"Lightify Smart Dimming Switch")],-1)),a[4]||(a[4]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Exposes"),(0,n.Lk)("td",null,"battery, action")],-1)),a[5]||(a[5]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Picture"),(0,n.Lk)("td",null,[(0,n.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/73743.png",alt:"Sylvania 73743"})])],-1))])]),a[12]||(a[12]=(0,n.Lk)("h2",{id:"ota-updates",tabindex:"-1"},[(0,n.Lk)("a",{class:"header-anchor",href:"#ota-updates"},[(0,n.Lk)("span",null,"OTA updates")])],-1)),(0,n.Lk)("p",null,[a[8]||(a[8]=(0,n.eW)("This device supports OTA updates, for more information see ")),(0,n.bF)(t,{to:"/guide/usage/ota_updates.html"},{default:(0,n.k6)((()=>a[7]||(a[7]=[(0,n.eW)("OTA updates")]))),_:1}),a[9]||(a[9]=(0,n.eW)("."))]),a[13]||(a[13]=(0,n.Lk)("h2",{id:"options",tabindex:"-1"},[(0,n.Lk)("a",{class:"header-anchor",href:"#options"},[(0,n.Lk)("span",null,"Options")])],-1)),(0,n.Lk)("p",null,[(0,n.Lk)("em",null,[(0,n.bF)(t,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,n.k6)((()=>a[10]||(a[10]=[(0,n.eW)("How to use device type specific configuration")]))),_:1})])]),a[14]||(a[14]=(0,n.Fv)('<ul><li><code>simulated_brightness</code>: Simulate a brightness value. If this device provides a brightness_move_up or brightness_move_down action it is possible to specify the update interval and delta. The action_brightness_delta indicates the delta for each interval. Example:</li></ul><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">simulated_brightness</span><span class="token punctuation">:</span></span>\n<span class="line">  <span class="token key atrule">delta</span><span class="token punctuation">:</span> <span class="token number">20</span> <span class="token comment"># delta per interval, default = 20</span></span>\n<span class="line">  <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">200</span> <span class="token comment"># interval in milliseconds, default = 200</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>up</code>, <code>up_hold</code>, <code>down</code>, <code>down_hold</code>, <code>up_release</code>, <code>down_release</code>.</p>',7))])}]]),i=JSON.parse('{"path":"/devices/73743.html","title":"Sylvania 73743 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Sylvania 73743 control via MQTT","description":"Integrate your Sylvania 73743 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2020-02-26T17:45:15.000Z"},"headers":[{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]}]}],"git":{"updatedTime":1739626513000},"filePathRelative":"devices/73743.md"}')}}]);