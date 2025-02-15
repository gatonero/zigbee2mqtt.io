"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[55526],{72104:(n,s,a)=>{a.r(s),a.d(s,{comp:()=>o,data:()=>r});var e=a(6254);const i=a.p+"assets/img/devicemanager.15b524ea.png",t={class:"hint-container warning"},l={},o=(0,a(32991).A)(l,[["render",function(n,s){const a=(0,e.g2)("RouteLink");return(0,e.uX)(),(0,e.CE)("div",null,[s[17]||(s[17]=(0,e.Fv)('<h1 id="windows" tabindex="-1"><a class="header-anchor" href="#windows"><span>Windows</span></a></h1><p>These instructions explain how to run Zigbee2MQTT on Windows.</p><div class="hint-container tip"><p class="hint-container-title">TIP</p><p>Before starting make sure you have an MQTT broker installed on your system. There are many tutorials available on how to do this, <a href="https://cedalo.com/blog/how-to-install-mosquitto-mqtt-broker-on-windows/" target="_blank" rel="noopener noreferrer">example</a>. Mosquitto is the recommended MQTT broker but others should also work fine.</p></div><h2 id="install-a-usb-to-uart-bridge-virtual-com-port-driver" tabindex="-1"><a class="header-anchor" href="#install-a-usb-to-uart-bridge-virtual-com-port-driver"><span>Install a USB-to-UART Bridge Virtual COM Port driver</span></a></h2><p>In order to be able to communicate with your USB device over a virtual COM port, you might need a driver for your OS in order for it to be able to be found by your flashing software.</p><ul><li>For CP210x based chipsets, there is a driver available at <a href="https://www.silabs.com/developers/usb-to-uart-bridge-vcp-drivers" target="_blank" rel="noopener noreferrer">Silicon Labs&#39; website</a>.</li><li>For CC1352/CC2652/CC2538 based chipsets, have a look at <a href="https://ftdichip.com/drivers/vcp-drivers/" target="_blank" rel="noopener noreferrer">FTDI chip&#39;s website</a> for drivers.</li></ul><h2 id="installing" tabindex="-1"><a class="header-anchor" href="#installing"><span>Installing</span></a></h2><ol><li>Download and install Node.js 20 LTS from <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">their website</a></li><li>Open up a <code>Command prompt</code> or <code>Powershell</code> from the Start menu (Powershell has prettier colors)</li><li>Verify Node.js was successfully installed<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">node</span> <span class="token parameter variable">--version</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li>Install pnpm<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> <span class="token function">pnpm</span></span>\n<span class="line"><span class="token function">pnpm</span> <span class="token parameter variable">--version</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></li><li>Choose a suitable directory for Zigbee2MQTT and copy all the files from the <a href="https://github.com/koenkk/zigbee2mqtt" target="_blank" rel="noopener noreferrer">Zigbee2MQTT repository</a><ul><li>if you prefer to use git (which you should), just clone the whole repository<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">git</span> clone <span class="token parameter variable">--depth</span> <span class="token number">1</span> https://github.com/Koenkk/zigbee2mqtt/</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li>otherwise use the green <code>Clone or download</code> button to download the zip archive, then extract it</li></ul></li><li>Change to the newly created directory and install dependencies with pnpm:<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">pnpm</span> i --frozen-lockfile</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li></ol><h2 id="configuring" tabindex="-1"><a class="header-anchor" href="#configuring"><span>Configuring</span></a></h2>',9)),(0,e.Lk)("ol",null,[s[3]||(s[3]=(0,e.Lk)("li",null,[(0,e.eW)("Copy "),(0,e.Lk)("code",null,"data\\configuration.example.yaml"),(0,e.eW)(" to "),(0,e.Lk)("code",null,"data\\configuration.yaml")],-1)),s[4]||(s[4]=(0,e.Lk)("li",null,[(0,e.eW)("Open "),(0,e.Lk)("code",null,"data\\configuration.yaml"),(0,e.eW)(" in a text editor")],-1)),(0,e.Lk)("li",null,[s[1]||(s[1]=(0,e.eW)("Change the MQTT configuration to match your setup, see the ")),(0,e.bF)(a,{to:"/guide/configuration/mqtt.html"},{default:(0,e.k6)((()=>s[0]||(s[0]=[(0,e.eW)("documentation")]))),_:1}),s[2]||(s[2]=(0,e.eW)(" for more info."))]),s[5]||(s[5]=(0,e.Lk)("li",null,"Make sure other settings are correct as well",-1)),s[6]||(s[6]=(0,e.Lk)("li",null,"Save and exit",-1))]),s[18]||(s[18]=(0,e.Fv)('<p>Congratulations, you&#39;re now ready to start your Zigbee2MQTT installation</p><h2 id="starting-zigbee2mqtt" tabindex="-1"><a class="header-anchor" href="#starting-zigbee2mqtt"><span>Starting Zigbee2MQTT</span></a></h2><p>Just change to the root directory of your installation and run the application:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">pnpm</span> start</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>A successful setup produces an output similar to this:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">&gt; zigbee2mqtt@1.6.0 start C:\\Users\\me\\Documents\\GitHub\\zigbee2mqtt</span>\n<span class="line">&gt; node index.js</span>\n<span class="line"></span>\n<span class="line">  Zigbee2MQTT:info 2019-10-18 10:56:22 PM Logging to directory: &#39;D:\\Documents\\GitHub\\zigbee2mqtt\\data\\log\\2019-10-18.22-56-22&#39;</span>\n<span class="line">  Zigbee2MQTT:info 2019-10-18 10:56:22 PM Starting Zigbee2MQTT version 1.6.0 (commit #e26ad2a)</span>\n<span class="line">  Zigbee2MQTT:info 2019-10-18 10:56:22 PM Starting zigbee-shepherd</span>\n<span class="line">  Zigbee2MQTT:info 2019-10-18 10:56:24 PM zigbee-shepherd started</span>\n<span class="line">  Zigbee2MQTT:info 2019-10-18 10:56:24 PM Coordinator firmware version: &#39;20190608&#39;</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The <code>Coordinator firmware version: &#39;20190608&#39;</code> entry means that Zigbee2MQTT has successfully communicated with the USB sniffer.</p><p>Zigbee2MQTT can be stopped anytime by pressing <code>CTRL + C</code> and then confirming with <code>Y</code>.</p>',8)),(0,e.Lk)("div",t,[s[16]||(s[16]=(0,e.Fv)('<p class="hint-container-title">ATTENTION</p><p>In case Zigbee2MQTT fails to start with <code>USB adapter discovery error (No valid USB adapter found). Specify valid &#39;adapter&#39; and &#39;port&#39; in your configuration.</code>, we need to configure the <code>serial</code> section in the <code>configuration.yaml</code>.</p><p>First determine which COM port is assigned to your device:</p><ol><li>Open up Start menu and start typing <code>Device Manager</code></li><li>Expand <code>Ports (COM &amp; LPT)</code></li><li>Look for a node similar to <code>USB Serial Device (COM4)</code></li></ol><p><img src="'+i+'" alt="Device Manager"></p>',5)),(0,e.Lk)("p",null,[s[8]||(s[8]=(0,e.eW)("For the example above, we would use ")),s[9]||(s[9]=(0,e.Lk)("code",null,"port: COM4",-1)),s[10]||(s[10]=(0,e.eW)(" in the ")),s[11]||(s[11]=(0,e.Lk)("code",null,"configuration.yaml",-1)),s[12]||(s[12]=(0,e.eW)(". Next configure the ")),s[13]||(s[13]=(0,e.Lk)("code",null,"serial",-1)),s[14]||(s[14]=(0,e.eW)(" section as described ")),(0,e.bF)(a,{to:"/guide/configuration/adapter-settings.html"},{default:(0,e.k6)((()=>s[7]||(s[7]=[(0,e.eW)("here")]))),_:1}),s[15]||(s[15]=(0,e.eW)("."))])]),s[19]||(s[19]=(0,e.Fv)('<h2 id="updating-zigbee2mqtt" tabindex="-1"><a class="header-anchor" href="#updating-zigbee2mqtt"><span>Updating Zigbee2MQTT</span></a></h2><p>It is recommended to back up the Zigbee2MQTT <code>\\data</code> subdirectory before performing any modifications.</p><ol><li>First, stop Zigbee2MQTT</li><li>Navigate to the directory where the Zigbee2MQTT repository was cloned to in the <a href="#installing">Installing</a> step</li><li>Pull the latest content from the configured source<div class="language-bat line-numbers-mode" data-highlighter="prismjs" data-ext="bat" data-title="bat"><pre><code><span class="line">git pull</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li>Update dependencies<div class="language-bat line-numbers-mode" data-highlighter="prismjs" data-ext="bat" data-title="bat"><pre><code><span class="line">pnpm i --frozen-lockfile</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li>Restart Zigbee2MQTT<div class="language-bat line-numbers-mode" data-highlighter="prismjs" data-ext="bat" data-title="bat"><pre><code><span class="line">pnpm start</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li></ol><p>Below is a sample PowerShell script to run which will take care of:</p><ul><li>Backing up the data directory</li><li>Updating Zigbee2MQTT</li><li>Restoring the data directory contents</li></ul><p>The script will automatically check if node is running (in case Zigbee2MQTT is still running) and ask to close if it is. You will need to manually stop and restart it afterwards.</p><p>Ensure you update the relevant paths in the script to match your environment. By default, the script will target <code>D:\\ProgramData\\zigbee2mqtt\\</code> as the install folder and <code>C:\\Temp\\</code> as the folder where to temporarily store the <code>data</code> folder backup</p><p>Run script from an elevated administrative PowerShell console</p><div class="language-powershell line-numbers-mode" data-highlighter="prismjs" data-ext="powershell" data-title="powershell"><pre><code><span class="line"><span class="token comment"># Z2M must not be running</span></span>\n<span class="line"><span class="token comment"># This script will NOT re-start it</span></span>\n<span class="line"></span>\n<span class="line"><span class="token comment"># Modify below paths as necessary</span></span>\n<span class="line"><span class="token variable">$z2mPath</span> = <span class="token string">&quot;D:\\ProgramData\\zigbee2mqtt&quot;</span></span>\n<span class="line"><span class="token variable">$backupPath</span> = <span class="token string">&quot;C:\\Temp&quot;</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span class="token comment"># DO NOT MODIFY below this line</span></span>\n<span class="line"><span class="token comment"># ------------------------------------------------------------------------------</span></span>\n<span class="line"><span class="token comment"># Build paths</span></span>\n<span class="line"><span class="token variable">$z2mDataPath</span> = <span class="token function">Join-Path</span> <span class="token operator">-</span>Path <span class="token variable">$z2mPath</span> <span class="token operator">-</span>ChildPath <span class="token string">&#39;data&#39;</span></span>\n<span class="line"><span class="token variable">$z2mBackupPath</span> = <span class="token function">Join-Path</span> <span class="token operator">-</span>Path <span class="token variable">$backupPath</span> <span class="token operator">-</span>ChildPath <span class="token string">&#39;z2mdata&#39;</span></span>\n<span class="line"></span>\n<span class="line"><span class="token comment"># Check if Z2M is running</span></span>\n<span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">Get-Process</span> <span class="token operator">-</span>Name <span class="token string">&quot;node&quot;</span> <span class="token operator">-</span>ErrorAction SilentlyContinue<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">    <span class="token comment"># Found running instance of node, stop script</span></span>\n<span class="line">    <span class="token string">&quot;Node still running, please close first&quot;</span> <span class="token punctuation">|</span> <span class="token function">Write-Host</span> <span class="token operator">-</span>ForegroundColor Red</span>\n<span class="line">    pause</span>\n<span class="line">    <span class="token keyword">return</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"><span class="token keyword">else</span> <span class="token punctuation">{</span></span>\n<span class="line">    <span class="token comment"># Continue!</span></span>\n<span class="line">    <span class="token string">&quot;Node not running, Zigbee2MQTT upgrade will continue&quot;</span> <span class="token punctuation">|</span> <span class="token function">Write-Host</span> <span class="token operator">-</span>ForegroundColor Green</span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"><span class="token comment"># Change working directory to:</span></span>\n<span class="line"><span class="token string">&quot;Setting location to &quot;</span><span class="token string">&quot;<span class="token function">$<span class="token punctuation">(</span><span class="token variable">$z2mPath</span><span class="token punctuation">)</span></span>&quot;</span><span class="token string">&quot;&quot;</span> <span class="token punctuation">|</span> <span class="token function">Write-Host</span></span>\n<span class="line"><span class="token function">Set-Location</span> <span class="token operator">-</span>Path <span class="token variable">$z2mPath</span></span>\n<span class="line"><span class="token comment"># Back up data directory:</span></span>\n<span class="line"><span class="token string">&quot;Backing up data subdirectory&quot;</span> <span class="token punctuation">|</span> <span class="token function">Write-Host</span></span>\n<span class="line"><span class="token function">Copy-Item</span> <span class="token operator">-</span>Path <span class="token variable">$z2mDataPath</span> <span class="token operator">-</span>Destination <span class="token variable">$z2mBackupPath</span> <span class="token operator">-</span>Recurse</span>\n<span class="line"><span class="token comment"># Pull the latest release:</span></span>\n<span class="line"><span class="token string">&quot;Running &quot;</span><span class="token string">&quot;git pull&quot;</span><span class="token string">&quot;&quot;</span> <span class="token punctuation">|</span> <span class="token function">Write-Host</span></span>\n<span class="line">&amp; git pull</span>\n<span class="line"><span class="token comment"># Update dependencies:</span></span>\n<span class="line"><span class="token string">&quot;Running &quot;</span><span class="token string">&quot;pnpm i --frozen-lockfile&quot;</span><span class="token string">&quot;&quot;</span> <span class="token punctuation">|</span> <span class="token function">Write-Host</span></span>\n<span class="line">&amp; pnpm i <span class="token operator">--</span>frozen-lockfile</span>\n<span class="line"><span class="token comment"># Restore backed-up data:</span></span>\n<span class="line"><span class="token string">&quot;Restore backed up data directory&quot;</span> <span class="token punctuation">|</span> <span class="token function">Write-Host</span></span>\n<span class="line"><span class="token function">Copy-Item</span> <span class="token operator">-</span>Path <span class="token string">&quot;<span class="token function">$<span class="token punctuation">(</span><span class="token variable">$z2mBackupPath</span><span class="token punctuation">)</span></span>\\*&quot;</span> <span class="token operator">-</span>Destination <span class="token variable">$z2mDataPath</span> <span class="token operator">-</span>Recurse <span class="token operator">-</span>Force</span>\n<span class="line"><span class="token comment"># Delete back up folder:</span></span>\n<span class="line"><span class="token string">&quot;Delete backed up folder&quot;</span> <span class="token punctuation">|</span> <span class="token function">Write-Host</span></span>\n<span class="line"><span class="token function">Remove-Item</span> <span class="token operator">-</span>Path <span class="token variable">$z2mBackupPath</span> <span class="token operator">-</span>Recurse</span>\n<span class="line"><span class="token string">&quot;Update completed!&quot;</span> <span class="token punctuation">|</span> <span class="token function">Write-Host</span> <span class="token operator">-</span>ForegroundColor Green</span>\n<span class="line">pause</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',9))])}]]),r=JSON.parse('{"path":"/guide/installation/05_windows.html","title":"Windows","lang":"en-US","frontmatter":{"pageClass":"content-page","next":"../configuration/"},"headers":[{"level":2,"title":"Install a USB-to-UART Bridge Virtual COM Port driver","slug":"install-a-usb-to-uart-bridge-virtual-com-port-driver","link":"#install-a-usb-to-uart-bridge-virtual-com-port-driver","children":[]},{"level":2,"title":"Installing","slug":"installing","link":"#installing","children":[]},{"level":2,"title":"Configuring","slug":"configuring","link":"#configuring","children":[]},{"level":2,"title":"Starting Zigbee2MQTT","slug":"starting-zigbee2mqtt","link":"#starting-zigbee2mqtt","children":[]},{"level":2,"title":"Updating Zigbee2MQTT","slug":"updating-zigbee2mqtt","link":"#updating-zigbee2mqtt","children":[]}],"git":{"updatedTime":1739626513000},"filePathRelative":"guide/installation/05_windows.md"}')}}]);