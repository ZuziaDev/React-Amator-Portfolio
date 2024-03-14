Öncelikle çok hızlı bir başlangıç yapcaz

Lanyard için ./src/hooks/lanyard.js kısmına dc ID nini koyunuz.

Mail olayı için basit bir post atabileceğiniz api açmanız lazım (nodemailler beceremiyorum ben) Aşağıdaki örnekten faydalanabilirsiniz.

```js
const express = require("express");
const app = express();

app.post("/hook", (req, res) =>{
const body = req.body;
res.json(body)
})

app.listen(3000)
```

Şimdilik bu kadar css tasarımı vs kötü olabilir ama yapacak bişi yok ilk react projem bu.
