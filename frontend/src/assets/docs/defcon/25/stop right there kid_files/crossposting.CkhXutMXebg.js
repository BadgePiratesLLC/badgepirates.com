!function(e){e.crossposting={crosspostableSubreddits:[],init:function(){this.popup=new e.ui.Popup({size:"xlarge",content:$("#crosspost-popup").html(),className:"crossposting-modal"})},bindClick:function(){$(document).delegate(".post-crosspost-button","click",this.handleClick.bind(this))},handleClick:function(t){this.init(),$(".crossposting-modal").remove();var n=$(t.target),i=n.thing()[0];this.type=$(i).data("type"),this.dropdown=this.createSubredditDropdown(),this.createThingPreview(i),this.updateDataAndLinks(n),this.findEl(".crosspost-sr-dropdown select").append(this.dropdown),this.onSelectSubreddit(),this.recentList=this.createRecentList(),!this.recentList||(this.findEl(".crosspost-recent-sr").show(),this.findEl(".crosspost-recent-sr-list").append(this.recentList).delegate("a","click",this.onRecentSRClick.bind(this))),this.popup.show(),e.flatlistevent.sendFlatListEvent(t,"post_flatlist_crosspost_click");var s=new e.ui.Recaptcha({el:this.findEl(".crosspost-content")[0],location:"submit"});s.loadCaptcha(),this.findEl("input").on("input",this.onFieldUpdate.bind(this)),this.findEl("select").on("change",this.onSelectSubreddit.bind(this))},findEl:function(e){return this.popup.$.find(e)},onRecentSRClick:function(e){e.preventDefault();var t=$(e.currentTarget),n=t.attr("href");this.findEl("select").val(n).change()},createThingPreview:function(e){var t=$(e.innerHTML),n=$(e.outerHTML),r=this.findEl(".crosspost-thing-preview"),i=e.dataset.targetRootType;if(this.type!=="comment"&&i!=="comment"){var s=n.find(".thumbnail img")[0],o=n.data("crosspost-root-title")||t.find("a.title").text(),u=_.template("<% if (thumbnail) { %><div class='crosspost-thumbnail'><%= thumbnail %></div><% } %><div><div class='crosspost-thing-preview-title'><%- title %></div><div class='crosspost-thing-preview-tagline'><%- score %> points • <%- commentsCount %> comments</div><div class='crosspost-thing-preview-tagline'>submitted <%- time %> by <%- author %> into <%- subredditNamePrefixed %></div>");r.html(u({score:n.data("crosspost-root-score")||e.dataset.score,commentsCount:n.data("crosspost-root-num-comments")||e.dataset.commentsCount,title:n.data("crosspost-root-title")||t.find("a.title").text(),time:n.data("crosspost-root-time")||t.find(".tagline time").text(),author:n.data("crosspost-root-author")||e.dataset.author,thumbnail:s?s.outerHTML:!1,subredditNamePrefixed:n.data("crosspost-root-subreddit-prefixed")||e.dataset.subredditPrefixed})),this.updateTitleInput(o)}else{var a=_.template("<div><p class='crosspost-thing-preview-text'><%- commentText %></p><div class='crosspost-thing-preview-tagline'><%- score %> • <%- replies %> replies</div><div class='crosspost-thing-preview-tagline'>comment posted <%- time %> by <%- author %> to <%- subredditNamePrefixed %></div></div>"),f="",l={};i!=="comment"?(f=n.children(".entry").find(".usertext-body").text(),l={commentText:f,score:t.find(".score.unvoted").eq(0).text(),replies:e.dataset.replies||0,time:t.find(".tagline time").eq(0).text(),author:e.dataset.author,subredditNamePrefixed:e.dataset.subredditPrefixed}):(f=$(e.dataset.targetRootCommentContent).text(),l={commentText:f,score:e.dataset.targetRootCommentScore||0,replies:e.dataset.targetRootCommentReplies||0,time:e.dataset.targetRootCommentTime||"",author:e.dataset.targetRootCommentAuthor||"",subredditNamePrefixed:e.dataset.targetRootCommentSubreddit||""}),r.html(a(l)),this.updateTitleInput()}},updateTitleInput:function(e){var t=this.findEl("input.crosspost-title");t.val(e||""),this.findEl(".crosspost-title-fake").text(e).on("keypress",function(e){return e.which!=13}).on("keyup",function(e){t.val($(this).text())})},onFieldUpdate:function(){var e=$(".crosspost-button"),t=$("input.crosspost-title"),n=$(".crosspost-subreddit");t.val()&&n.val()?e.removeAttr("disabled"):e.attr("disabled","disabled")},onSelectSubreddit:function(t){var n=this.findEl(".crosspost-subreddit").val(),i="<div class='crosspost-label'>Crossposting rules</div>",s=this.findEl(".crosspost-subreddit-rules");e.ajax({async:!1,type:"GET",url:"/r/"+n+"/about/rules.json"}).then(function(e){function o(e){var t="";return e.forEach(function(e){t+="<li>"+e.short_name+"</li>"}),"<ul class='crosspost-subreddit-rules-list'>"+t+"</ul>"}var t=e.rules.filter(function(e){return e.kind==="link"||e.kind==="all"}),r=t.length;i+=o(t.slice(0,Math.min(r,5))),r>5&&(i+=o(t.slice(5,Math.min(r,10)))),i+="<div class='clearleft'></div>",i+="<a class='crosspost-link' target='_blank' href='/r/"+n+"/about/rules'>See rules details</a>",r!==0?s.html(i):s.html("")})},createSubredditDropdown:function(){var t="";return e.ajax({async:!1,type:"GET",url:"/api/crosspostable_subreddits.json",data:{type:this.type}}).then(function(n){n&&("u_"+e.config.logged===n[0]&&(t+="<option value="+n[0]+">Your Profile</option>",n.shift()),this.crosspostableSubreddits=n,n.map(function(e){t+="<option value="+e+">"+e+"</option>"}))}.bind(this)),t},createRecentList:function(){var t="";return e.ajax({async:!1,type:"GET",url:"/user/"+e.config.logged+"/top_karma_subreddits.json"}).then(function(e){if(e&&e.data&&e.data.length){var n=e.data.filter(function(e){return this.crosspostableSubreddits.indexOf(e.sr)!==-1}.bind(this));n.map(function(e){t+='<a href="'+e.sr+'">'+e.sr+"</a>"})}}.bind(this)),t},updateDataAndLinks:function(e){var t=e.thing_id(),n=this.findEl("#crosspost_fullname");n.val(t);var r=$(e.thing()[0].outerHTML),i=r.data("num-crossposts"),s=r.data("permalink").replace("/comments/","/duplicates/");i=i?parseInt(i):0,i&&this.findEl(".crosspost-link").attr("href",s).css({display:"inline-block"})}},$(function(){e.config.logged&&e.crossposting.bindClick()})}(r);