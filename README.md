# Banner-slider-full-screen

How to use?
--------------------------------------


###Add banners

add a `<li>`in your section

```html
<ul class='banner_wrap' >
    <li class="banner" >
        This is Banner 1
    </li>
    <li class="banner" >
        This is Banner 2
    </li>
    <li class="banner" >
        This is Banner 3
    </li>
</ul>
```
###customize
```html
<script type="text/javascript">
$('#banner_section1').julio({
         'bannerNum' :2,
         'duration' :5000,
         'auto' : 'on',
         'ball' :'on'
    });
</script>    
```
**bannerNum**
Your Start banner
```
default: 0
options: integer
```

**duration**
the duration of sliding
```
default: 5000
options: integer
```
**auto**
auto slider
```
default: true
options: boolean (true / false)
```
**ball**
banner shortcut
```
default: true
options: boolean (true / false)
```
