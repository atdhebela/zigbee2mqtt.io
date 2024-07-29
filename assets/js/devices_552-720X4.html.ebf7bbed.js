"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[37756],{41521:(e,t,n)=>{n.r(t),n.d(t,{comp:()=>m,data:()=>k});var o=n(64516);const i=(0,o.Lk)("h1",{id:"niko-552-720x4",tabindex:"-1"},[(0,o.Lk)("a",{class:"header-anchor",href:"#niko-552-720x4"},[(0,o.Lk)("span",null,"Niko 552-720X4")])],-1),s=(0,o.Lk)("thead",null,[(0,o.Lk)("tr",null,[(0,o.Lk)("th"),(0,o.Lk)("th")])],-1),a=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Model"),(0,o.Lk)("td",null,"552-720X4")],-1),l=(0,o.Lk)("td",null,"Vendor",-1),d=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Description"),(0,o.Lk)("td",null,"Battery switch with 4 buttons")],-1),c=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Exposes"),(0,o.Lk)("td",null,"action, battery, linkquality")],-1),r=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Picture"),(0,o.Lk)("td",null,[(0,o.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/552-720X4.png",alt:"Niko 552-720X4"})])],-1),u=(0,o.Lk)("h2",{id:"options",tabindex:"-1"},[(0,o.Lk)("a",{class:"header-anchor",href:"#options"},[(0,o.Lk)("span",null,"Options")])],-1),p=(0,o.Fv)('<ul><li><code>simulated_brightness</code>: Simulate a brightness value. If this device provides a brightness_move_up or brightness_move_down action it is possible to specify the update interval and delta. The action_brightness_delta indicates the delta for each interval. Example:</li></ul><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">simulated_brightness</span><span class="token punctuation">:</span></span>\n<span class="line">  <span class="token key atrule">delta</span><span class="token punctuation">:</span> <span class="token number">20</span> <span class="token comment"># delta per interval, default = 20</span></span>\n<span class="line">  <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">200</span> <span class="token comment"># interval in milliseconds, default = 200</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>on_top_left</code>, <code>off_top_left</code>, <code>on_bottom_left</code>, <code>off_bottom_left</code>, <code>on_top_right</code>, <code>off_top_right</code>, <code>on_bottom_right</code>, <code>off_bottom_right</code>, <code>brightness_move_up_top_left</code>, <code>brightness_move_up_bottom_left</code>, <code>brightness_move_up_top_right</code>, <code>brightness_move_up_bottom_right</code>, <code>brightness_move_down_top_left</code>, <code>brightness_move_down_bottom_left</code>, <code>brightness_move_down_top_right</code>, <code>brightness_move_down_bottom_right</code>, <code>brightness_stop_top_left</code>, <code>brightness_stop_bottom_left</code>, <code>brightness_stop_top_right</code>, <code>brightness_stop_bottom_right</code>.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',9),h={},m=(0,n(40681).A)(h,[["render",function(e,t){const n=(0,o.g2)("RouteLink");return(0,o.uX)(),(0,o.CE)("div",null,[i,(0,o.Lk)("table",null,[s,(0,o.Lk)("tbody",null,[a,(0,o.Lk)("tr",null,[l,(0,o.Lk)("td",null,[(0,o.bF)(n,{to:"/supported-devices/#v=Niko"},{default:(0,o.k6)((()=>[(0,o.eW)("Niko")])),_:1})])]),d,c,r])]),u,(0,o.Lk)("p",null,[(0,o.Lk)("em",null,[(0,o.bF)(n,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,o.k6)((()=>[(0,o.eW)("How to use device type specific configuration")])),_:1})])]),p])}]]),k=JSON.parse('{"path":"/devices/552-720X4.html","title":"Niko 552-720X4 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Niko 552-720X4 control via MQTT","description":"Integrate your Niko 552-720X4 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2023-04-27T17:39:27.000Z"},"headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]},{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1722279395000},"filePathRelative":"devices/552-720X4.md"}')}}]);