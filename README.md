# copy-big-movie

## [项目说明]

K3-L0-R3 拷贝大视频的小工具

---

## [项目任务]

- 可以拷贝大视频文件的工具
- 细节：文件(夹)是否存在检查/文件合法检查/文件读取错误提示/大文件的流式读写(stream/pipe)

---

#### 启动服务

```sh
node index.js
```

#### 查看执行结果

```javascript

//使用 stream pipe，通过流和管道拷贝文件，拷大文件时，内存不太会被吃爆。
// 在File文件夹下面放视频文件，启动服务后 会在NewFile文件夹下面生成拷贝的视频
 await fileTool.doStream(file,newFIle);  // 使用FileTool类

```

---

## License

ISC

---
