<template> 
    <transition name="fade">  
    <div class="popover" v-show="showPopover">
        <div class="popover-header">
            <i class="el-icon" style="font-size: 20px;">
                <svg t="1696389301596" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                    p-id="21196">
                    <path
                        d="M444.708571 174.08l-167.314285 93.44A36.571429 36.571429 0 0 1 256 274.285714H73.142857a73.142857 73.142857 0 0 0-73.142857 73.142857v329.142858a73.142857 73.142857 0 0 0 73.142857 73.142857h182.857143a36.571429 36.571429 0 0 1 21.211429 6.765714l167.314285 93.44a73.142857 73.142857 0 0 0 115.748572-59.428571V233.508571a73.142857 73.142857 0 0 0-115.565715-59.428571zM815.177143 887.771429a36.571429 36.571429 0 0 1-21.76-66.011429 384 384 0 0 0 0-619.52 36.571429 36.571429 0 0 1 43.337143-59.062857 457.142857 457.142857 0 0 1 0 737.645714 36.571429 36.571429 0 0 1-21.577143 6.948572z"
                        fill="#333333" p-id="21197"></path>
                    <path
                        d="M711.497143 736.365714a36.571429 36.571429 0 0 1-26.514286-61.622857 237.714286 237.714286 0 0 0 0-325.485714 36.571429 36.571429 0 0 1 53.211429-50.285714 310.857143 310.857143 0 0 1 0 426.057142 36.571429 36.571429 0 0 1-26.697143 11.337143z"
                        fill="#333333" p-id="21198"></path>
                </svg>
            </i>
            <span class="title">公告</span>
            <button @click="toggleCloseIcon">
                <i class="el-icon close-icon" style="font-size: 20px;">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
                        <path fill="currentColor"
                            d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336L512 457.664z">
                        </path>
                    </svg>
                </i>
            </button>
        </div>
        <div class="body content">
            <p class="p_margin" id="p1">请认准淘宝店：</p>
            <p class="p_margin" id="p1">爱上NAS爱上家!</p>
            <!-- <img src="https://img.cdn.sugarat.top/mdImg/MTYxNTAxODc2NTIxMA==615018765210" style=""> -->
            <p class="p_margin" id="p2">同行竞争可以，请不要照搬我的话术、图片和店铺装修。<span>本文档为原创文档，仅供本店客户使用。</span></p>
            <div class="button-container">
                <a href="https://item.taobao.com/item.htm?id=725282812681" target="_blank"
                    class="el-button el-button--primary button-author">
                    <span>查看店铺</span>
                </a>
                <!-- <a href="https://item.taobao.com/item.htm?id=725282812681" target="_blank" class="el-button el-button--success button-group">  
              <span>查看店铺</span>  
            </a> -->
            </div>
        </div>
    </div></transition>
    <button class="popover-close" v-if="showCloseIcon" @click="togglePopover">
        <i class="el-icon2">
            <svg t="1696395419765" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="23165" width="200" height="200">
                <path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#FFFFFF" p-id="23166"></path>
                <path d="M838.096414 412.800584a75.2 60 81 1 0-118.522601 18.772135 75.2 60 81 1 0 118.522601-18.772135Z"
                    fill="#FF7400" p-id="23167"></path>
                <path
                    d="M782.35962 509.591395c-16.178456 0.132499-32.567942-6.181354-45.882708-18.652001-15.145362-13.800652-25.635703-34.008392-29.264982-56.922761-7.508854-47.40904 17.964942-91.132326 57.472475-97.389705s77.245792 27.454101 84.754646 74.863142c3.62928 22.91437-0.22824 44.584615-10.242551 63.18014-10.804462 18.720673-27.476157 31.080875-47.229924 34.209564-3.160603 0.50059-6.446353 0.21103-9.606956 0.711621z m-13.920788-149.259947c-26.074972 4.12987-43.028875 35.164128-37.522382 69.930757 2.753247 17.383315 10.787253 32.310295 22.146275 42.660785 10.443723 9.685486 23.297164 14.129478 35.149424 12.252264 11.85226-1.877214 22.70334-10.075633 29.642931-22.514365 7.604594-13.354031 10.632698-30.033077 7.879451-47.416392-5.506493-34.76663-31.220726-59.042919-57.295699-54.913049z"
                    fill="#333333" p-id="23168"></path>
                <path d="M318.536 664.864l23.904 150.912 67.952-10.76 14.816-157.048-106.672 16.896z" fill="#FF7400"
                    p-id="23169"></path>
                <path
                    d="M332.464 829.512L304.808 654.88l134.32-21.28-17.376 181.76-89.28 14.144z m-0.192-154.68l20.144 127.216 47.408-7.504 12.248-132.352-79.8 12.64z"
                    fill="#333333" p-id="23170"></path>
                <path
                    d="M255.288 337.12c-6.32 1-10.976 7.408-9.976 13.728l48.808 308.16c1 6.32 7.408 10.976 13.736 9.976l298.672-47.304c4.744-0.752 10.4-0.84 14.72 0.904l175.08 46.792c1.704 0.536 3.28 0.288 4.864 0.04 6.32-1.008 10.976-7.408 9.976-13.736L738.08 194.24c-0.248-1.584-0.496-3.168-1.536-4.624-3.376-5.944-10.864-7.184-16.8-3.816L567.68 284.4c-4.368 3.12-8.984 4.664-13.72 5.416L255.28 337.12z"
                    fill="#FFB900" p-id="23171"></path>
                <path
                    d="M799.912 681.76c-2.376 0.384-4.08-0.16-5.784-0.696l-175.072-46.792a21.304 21.304 0 0 0-9.856-0.864l-298.68 47.304c-6.32 1-13.016-0.368-17.72-4.48-5.488-4-8.736-9.152-9.736-15.472l-48.808-308.16c-1.008-6.32 0.368-13.016 4.48-17.72 3.992-5.488 9.144-8.736 15.464-9.736L552.88 277.84a21.304 21.304 0 0 0 9.104-3.872l151.256-98.48c5.16-3.248 11.48-4.24 18.056-3.664a26.32 26.32 0 0 1 15.432 10.512c2.08 2.912 3.368 5.944 3.872 9.104l73.088 461.448c2.128 13.44-6.52 25.336-19.952 27.464-1.456 1.04-3.04 1.288-3.824 1.416z m-187.232-72.4c4.08 0.168 8.152 0.336 12.352 1.28l175.072 46.8-73.088-461.456L574.184 294.72c-5.944 3.368-12.016 5.952-18.336 6.96l-298.68 47.304 48.8 308.16 298.68-47.312c2.376-0.376 4.744-0.752 8.032-0.464z"
                    fill="#333333" p-id="23172"></path>
                <path
                    d="M286.32 614.88L250.912 391.28l-84.544 13.392c-6.32 1-10.976 7.408-9.976 13.728l31.664 199.912c1 6.32 7.408 10.976 13.728 9.968l84.552-13.384z"
                    fill="#FF7400" p-id="23173"></path>
                <path
                    d="M199.704 640.752c-4.864-0.04-9.984-1.656-13.64-4.32a24.816 24.816 0 0 1-9.864-16.256l-31.664-199.904c-2.128-13.44 6.512-25.336 19.952-27.464l96.4-15.264 39.168 247.312-96.4 15.272-3.952 0.624z m41.232-235.752l-72.696 11.52 31.664 199.904 72.688-11.52-31.656-199.904z"
                    fill="#333333" p-id="23174"></path>
                <path
                    d="M432.864 742.328c-4.08-0.16-8.152-0.32-11.56-1.408l6.888-22.96c12.728 3.656 27.28-6.752 31.352-21.976 4.736-16.136-1.84-32.104-14.576-35.76l6.896-22.96c25.456 7.304 39.816 36.624 31.432 65.488-8.48 23.216-29.384 39.488-50.432 39.576z"
                    fill="#333333" p-id="23175"></path>
            </svg>
        </i>
    </button>
</template>

  
<script>
export default {  
    data() {  
        return {  
            showPopover: true,  
            showCloseIcon: false  
        };  
    },  
    methods: {  
        togglePopover() {  
            this.showPopover = !this.showPopover;  
            this.showCloseIcon = this.showPopover ? false : true;  
        },  
        toggleCloseIcon() {  
            this.showPopover = false;  
            this.showCloseIcon = !this.showCloseIcon;  
        }  
    }  
};    
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {  
  transition: all 0.5s ease;  
}  
.fade-enter, .fade-leave-to {  
  transform: translateX(100%);  
}
/* 公告文字样式 */
.p_margin {
    margin: 20px 0;
}

#p1 {
    color: red;
    font-size: 20px;
    font-weight: bold;
    text-align: left;
}

#p2 {
    font-size: 20px;
    line-height: 1.5;
    text-align: left;
}

#p2 span {
    font-size: 18px;
    font-weight: bold;
    text-align: left;
}

:root {
    --width-zt: 258px;
    /* 公告总宽度 */
    --width-bo: 80px;
    /* 公告离地高度 */
    --height-close: 40px;
    /* 显示按钮的高度宽度 */
}

/* 公告主体样式 */
.popover {
    width: var(--width-zt);
    position: fixed;
    bottom: var(--width-bo);
    right: 20px;
    z-index: 22;
    box-sizing: border-box;
    border: 1px solid #5672cd;
    border-radius: 6px;
    box-shadow: 0 1px 8px 0 rgba(0, 0, 0, .1);
    background-color: var(--vp-c-bg);
    border: 1px solid var(--vp-c-gutter);
    border-radius: 14px;
}

/* 关闭后按钮样式 */
.popover-close {
    opacity: .5;
    z-index: 22;
    bottom: calc(var(--width-zt) + var(--width-bo) + var(--height-close) + 30px);
    right: 15px;
    position: fixed;
    /* background-color: #5672cd; */
    border: 1px solid var(--vp-c-gutter);
    /* 移除默认的边框 */
    /* padding: 10px; */
    color: #fff;
    border-radius: 50%;
    /* 使按钮成为正圆形 */
    display: flex;
    align-items: center;
    justify-content: center;
    /* 使图标在按钮中居中 */
    width: var(--height-close);
    height: var(--height-close);
    cursor: pointer;
    /* 添加鼠标悬停时的手形光标 */
}

.el-icon2 {
    display: flex;
    /* 添加 flex 属性 */
    align-items: center;
    /* 使 SVG 在 i 标签内居中 */
    justify-content: center;
    width: 100%;
    height: 100%;
}

/* 主体样式 */
.popover-header {
    background-color: var(--vp-sidebar-bg-color);
    color: var(--vp-c-text-1);
    padding: 6px 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top-left-radius: 14px;
    border-top-right-radius: 14px;
    border-bottom: 1px solid var(--vp-c-gutter);
}

.title-wrapper {
    display: flex;
    align-items: center;
}

.el-icon {
    height: 1em;
    width: 1em;
    line-height: 1em;
    display: block;
    position: relative;
    fill: currentColor;
    color: inherit;
    font-size: inherit;
}

.title-wrapper .title {
    font-size: 14px;
    padding-left: 6px;
}

.close-icon {
    cursor: pointer;
}

.body.content,
.footer.content {
    text-align: center;
}

.body {
    margin-bottom: 10px;
    box-sizing: border-box;
    padding: 10px 10px 0;
}

/* a标签的按钮样式 */
.button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;
}

.button-author,
.button-group {
    border: none;
    transition: all 0.3s ease;
    cursor: pointer;
    font-size: 16px;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    margin: 5px;
    text-decoration: none !important;
}

.button-author {
    color: var(--vp-button-alt-text);
    background-color: var(--vp-button-alt-bg);
    border: 1px solid var(--vp-c-gutter);
}

.button-group {
    background-color: #f44336;
}

.button-author:hover,
.button-group:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    transform: translateY(-3px);
}</style>