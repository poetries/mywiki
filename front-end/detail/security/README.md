# Web 安全

## 术语
## 0day
是已经被发现(有可能未被公开),而官方还没有相关补丁的漏洞

## 肉鸡
是指可以被黑客远程控制的机器。

## 僵尸网络
僵尸网络 Botnet 是指采用一种或多种传播手段，将大量主机感染bot程序（僵尸程序）病毒，从而在控制者和被感染主机之间所形成的一个可一对多控制的网络。 攻击者通过各种途径传播僵尸程序感染互联网上的大量主机，而被感染的主机将通过一个控制信道接收攻击者的指令，组成一个僵尸网络。之所以用僵尸网络这个名字，是为了更形象地让人们认识到这类危害的特点：众多的计算机在不知不觉中如同中国古老传说中的僵尸群一样被人驱赶和指挥着，成为被人利用的一种工具。

## DDoS（Distributed Denial of Service，分布式拒绝服务）
透过大量合法或伪造的请求占用大量网络以及器材资源，以达到瘫痪网络以及系统的目的。

## payload
完成各种功能的恶意脚本。

## 蜜罐与蜜网（Honeypots and Honeynets）
蜜罐是一种软件应用系统，用来称当入侵诱饵，引诱黑客前来攻击。攻击者入侵后，通过监测与分析，就可以知道他是如何入侵的，随时了解针对组织服务器发动的最新的攻击和漏洞。还可以通过窃听黑客之间的联系，收集黑客所用的种种工具，并且掌握他们的社交网络。 设置蜜罐并不复杂，只要在外部因特网上有一台计算机运行没有打上补丁的微软Windows或者Red Hat Linux即行，然后在计算机和因特网连接之间安置一套网络监控系统，以便悄悄记录下进出计算机的所有流量。然后只要坐下来，等待攻击者自投罗网。

当多个蜜罐被网络连接在一起时模拟一个大型网络，并利用其中一部分主机吸引黑客入侵，通过监测、观察入侵过程，一方面调查入侵者的来源，另一方面考察用于防护的安全措施是否有效。这种由多个蜜罐组成的模拟网络就称为蜜网。

## 资源
* [乌云网](http://www.wooyun.org/)
* [纳威安全导航](http://navisec.it/)
* [sec-wiki](http://www.sec-wiki.com/) 安全百科
* [EtherDream の 原创空间](http://www.cnblogs.com/index-html)
* WebGoat
* [余弦(懒人在思考)](http://evilcos.me/)
* [html5security](http://html5security.org/)
* [乌云知识库](http://drops.wooyun.org/)
* [知道创宇 博客](http://blog.knownsec.com/)
* [腾讯安全应急响应中心 实验室](http://security.tencent.com/index.php/opensource/all)
* [安全脉搏](http://www.secpulse.com/)

## 书
* [《Web之困：现代Web应用安全指南》](http://wenku.it168.com/d_001267004.shtml)
* 白帽子讲Web安全

## 工具
* [中间人攻击利用框架bettercap测试](http://aquaregia.gitbooks.io/tmux-productive-mouse-free-development_zh/content/index.html) [bettercap](https://www.bettercap.org/) 
基于ARP欺骗来获取局域网流量，并且改包的内容

## 其他
* [开发浏览器的security的Tab](https://github.com/craigfrancis/dev-security)
* [IE安全系列：IE浏览器的技术变迁（上）](http://www.infoq.com/cn/articles/Internet-Explorer-Security1)
* [IE安全系列：IE浏览器的技术变迁（下）](http://www.infoq.com/cn/articles/Internet-Explorer-Security2)
* 黑哥
	* [中国黑客传说：我是超级黑](http://www1.taosay.net/index.php/2013/02/27/%e4%b8%ad%e5%9b%bd%e9%bb%91%e5%ae%a2%e4%bc%a0%e8%af%b4%ef%bc%9a%e6%88%91%e6%98%af%e8%b6%85%e7%ba%a7%e9%bb%91/)
	* [黑哥谈应用安全：技术的进步就是为了解决矛盾](http://www.infoq.com/cn/news/2014/02/superhei-on-security/%20)
	* [黑哥说安全 视频](https://github.com/iamjoel/web-security/issues/7)
* [从“黑掉Github”学Web安全开发](http://coolshell.cn/articles/11021.html)
* [程序员与黑客-余弦](http://www.infoq.com/cn/presentations/programmers-and-hackers)
