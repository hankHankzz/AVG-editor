   // 读表脚本
    // 包含一下几个属性
    // 1. 文本 2. 文本属性（剧情文本/玩家选项/章节） 3. 是否自动播放（迭代） 4. 后续文本位置
    // 5. 关联CG资源

    //自动读取文件
    window.onload = function()
    {


        document.getElementById('read').onchange = function()
        {
            var reader = new FileReader();
            var file = this.files[0]; //files为上传组件获取的地址
            reader.readAsText(file, 'utf-8');
            reader.onload = function()
            {
                // 逐行读取数据
                var contentArray = reader.result.split(/\r\n|\n/);
                var index = 0;
                printStory(contentArray,index);

                reader.onerror = function()
                {
                    console.log('读取失败');
                    console.log(reader.error);
                };
            }   
        }

    function printStory(item,index)
        {

            //根据空格分隔数据
            if(item[index])
            {
                var content = item[index].split(/\s+/);
        
                //创建正文
                var p = document.createElement("p");

                // 逐字显示
                var textArray = content[3].split("");
                for
                var div = document.getElementById("text");
                div.appendChild(p);

                //判断文本类型,并未不同的文本类型设置样式
                if(content[0] == 0)
                {
                    // 标题样式
                    p.style.fontSize = '24px';
                    p.style.color = 'gold';
                    p.style.fontFamily = 'bold';
                }
                else if(content[0] == 1)
                {
                    // 文本样式
                    p.style.fontSize = '24px';
                    p.style.color = 'white';
                }
                else if(content[0] == 2)
                {
                    // 选项样式
                    div.removeChild(p);

                }
                
                //判断自动播放
                if(content[1] == 0)
                {
                    //更新Index
                    index += 1;
                    //自动播放至一下一段对话
                    printStory(item,index);
                }
                else
                {
                    //创建按钮
                    var continueBtn = document.createElement('button');
                    continueBtn.setAttribute('class','continueBtn');
                    if(content[0] == 1)
                    {
                        continueBtn.innerHTML = "继续";
                    }
                    else
                    {
                        continueBtn.innerHTML = content[3];
                    }
                    
                    continueBtn.onclick = function()
                    {
                        continueBtn.style.display = "none";
                        index += 1;
                        printStory(item,index);
                    }
                    var p2 = document.createElement('p');
                    div.appendChild(p2);
                    p2.appendChild(continueBtn);
                }

            }

        //绑定美术资源
        // var cg = document.getElementById("cg");
        // cg.setAttribute("src",story[i].rsc);

        }

        var fileInput = document.getElementById('read');
        fileInput.onclick = function()
        {
            fileInput.style.display = "none";
        }

        // 处理json文件

        // var url = "story.json" //获取本地json文件
        // var request = new XMLHttpRequest();
        // request.open("get",url,true);
        // request.send();
        // request.onload = function()
        // {
        //     if(request.status == 200)
        //     {
        //         var story = JSON.parse(request.responseText);
        //     }

        //     for(var i = 0; i < story.length; i++)
        //     {
        //         console.log(story[i].text);
        //         // //对脚本进行批量操作

        //         // //创建正文
        //         // var p = document.createElement("p");
        //         // p.innerHTML = story.text;
        //         // var div = document.getElementById("text");
        //         // div.appendChild(p);

        //         // //判断文本类型,并未不同的文本类型设置样式
        //         // if(story[i].textType == 0)
        //         // {
        //         //     // 标题样式
        //         //     p.style.color = 'pink';
        //         // }
        //         // else if(story[i].textType == 1)
        //         // {
        //         //     // 文本样式
        //         //     p.style.color = 'red';
        //         // }
        //         // else if(story[i].textType == 2)
        //         // {
        //         //     // 选项样式
        //         //     p.style.color = 'green';
        //         // }

        //         // //判断自动播放
        //         // //下接选项
        //         // if(story.autoPlay == 0)
        //         // {
        
        //         // }
        //         // //下接剧情
        //         // else if(story.autoPlay == 1)
        //         // {

        //         // }

        //         // //绑定美术资源
        //         // // var cg = document.getElementById("cg");
        //         // // cg.setAttribute("src",story[i].rsc);

        //         // //下一段文本位置
        //         // i += story.nextText;

        //     }
        // }

        // document.getElementById('read').onchange = function()
        // {
        //     var file = this.files[0]; //读取文件
        //     var reader = new FileReader();
        //     reader.onload  = function(progressEvent)
        //     {
        //         var fileContentArray = this.result.split(/\r\n|\n/);
        //         for(var line = 0;line < line.length-1;line++)
        //         {
        //             console.log(line + "--->" + lines[line]);
                    
        //             //处理数据
        //         }
        //     }
        //     reader.readAsText(file);
        // }


    }