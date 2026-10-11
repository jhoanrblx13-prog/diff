document.getElementById("go").onclick = async () => {
  const left = document.getElementById("text").value;
  const right = document.getElementById("right").value;
  const body = await (await fetch("/api", {method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify({left, right})})).json();
  document.getElementById("out").textContent = body.diff;
};
