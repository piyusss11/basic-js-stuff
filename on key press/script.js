let key = document.querySelector("#table");

window.addEventListener("keydown", (e) => {
  key.innerHTML = `<table>
    <tr>
      <th>key</th>
      <th>code</th>
    </tr>
    <tr>
      <td>${e.key === " " ? "Space" : e.key}</td>
      <td>${e.code}</td>
    </tr> 
    </table>`;
});
