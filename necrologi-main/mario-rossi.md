:root{--navy:#10253a;--navy2:#081827;--gold:#b88a37;--ivory:#f7f3eb;--white:#fff;--text:#26313c;--muted:#6c7580;--line:#e5ddd0}
*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;font-family:Arial,Helvetica,sans-serif;color:var(--text);line-height:1.65;background:#fff}
a{color:inherit}.container{width:min(1160px,calc(100% - 40px));margin:auto}img{max-width:100%;display:block}
header{background:#fff;border-bottom:1px solid var(--line);position:sticky;top:0;z-index:50}.nav{min-height:82px;display:flex;align-items:center;justify-content:space-between;gap:22px}.brand img{height:58px;width:auto}
.menu{display:flex;gap:20px;align-items:center}.menu a{text-decoration:none}.menu .admin-link{padding:9px 13px;border:1px solid var(--gold);border-radius:5px}
.hero{padding:95px 0;background:linear-gradient(120deg,var(--navy),var(--navy2));color:#fff;text-align:center}.hero h1{font-size:clamp(2.8rem,6vw,5rem);margin:0 0 20px}
h1,h2,h3{font-family:Georgia,"Times New Roman",serif;line-height:1.18}h2{color:var(--navy);font-size:clamp(2rem,4vw,3rem)}
section{padding:76px 0}.alt{background:var(--ivory)}.section-head{text-align:center;max-width:760px;margin:0 auto 42px}
.btn{display:inline-block;padding:13px 20px;border-radius:6px;text-decoration:none;font-weight:bold;border:0;cursor:pointer}.btn-gold{background:var(--gold);color:var(--navy2)}.btn-dark{background:var(--navy);color:#fff}
.toolbar{display:flex;gap:12px;flex-wrap:wrap;justify-content:center;margin-bottom:32px}.toolbar input{max-width:520px}
.grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:24px}.card{background:#fff;border:1px solid var(--line);border-radius:14px;overflow:hidden;box-shadow:0 12px 32px rgba(20,40,61,.08)}
.card img{width:100%;height:310px;object-fit:cover;object-position:center top}.card-body{padding:24px}.card h2{font-size:1.8rem;margin:0 0 7px}.meta{color:var(--muted)}
.badge{display:inline-block;background:#f0e4cb;color:#745318;padding:4px 9px;border-radius:999px;font-size:.82rem;font-weight:bold}
.detail{display:grid;grid-template-columns:350px 1fr;gap:42px}.portrait{width:100%;border-radius:14px;box-shadow:0 14px 35px rgba(20,40,61,.12)}
.panel{background:#fff;border:1px solid var(--line);border-radius:14px;padding:30px}.panel h1{font-size:clamp(2.4rem,5vw,4rem);color:var(--navy);margin:0}.dates{font-family:Georgia,serif;color:var(--gold);font-size:1.25rem;margin:10px 0 22px}
.info-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:15px;margin:25px 0}.info{background:var(--ivory);padding:17px;border-radius:9px}.info strong{display:block;color:var(--navy)}
.columns{display:grid;grid-template-columns:1fr .78fr;gap:28px}.form,.qrbox{border-radius:14px;padding:28px}.form{background:#fff;border:1px solid var(--line)}.qrbox{background:var(--navy);color:#fff;text-align:center}.qrbox h3{color:#fff}.qrbox canvas,.qrbox img{background:#fff;padding:12px;border-radius:10px;max-width:100%;margin:auto}
.row{display:grid;grid-template-columns:1fr 1fr;gap:15px}.group{margin-bottom:16px}label{display:block;font-weight:bold;color:var(--navy);margin-bottom:6px}
input,textarea,select{width:100%;padding:13px;border:1px solid #cbc2b5;border-radius:7px;font:inherit}textarea{min-height:145px}.check{display:flex;gap:10px}.check input{width:auto;margin-top:5px}
.notice{background:#fff8e6;border-left:4px solid var(--gold);padding:17px;border-radius:8px;margin-bottom:25px}
.empty{text-align:center;background:#fff;border:1px dashed #cfc5b6;border-radius:12px;padding:35px}
footer{background:#07131f;color:#d2dbe4;text-align:center;padding:25px}
@media(max-width:900px){.menu{display:none}.grid{grid-template-columns:1fr 1fr}.detail,.columns{grid-template-columns:1fr}.portrait{max-width:430px;margin:auto}}
@media(max-width:600px){.grid,.info-grid,.row{grid-template-columns:1fr}.container{width:min(100% - 24px,1160px)}}