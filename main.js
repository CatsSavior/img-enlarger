document.cookie = "grafana_session = ed6663d714c1dafb27e2d07d7c7559a4"

const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('redirect');

if (myParam && myParam.length > 0) {
   if (myParam[1] === '/'){
       window.location = myParam.substring(1);
   } else {
       window.location = myParam;
}
}