fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((x) => {
    let container = document.createElement("div");
    container.classList.add("row");
    x.forEach((element) => {
      let curr;

      if (element.currencies === undefined) {
        console.log("no curr for this country");
      } else {
        curr = Object.keys(element.currencies);
        console.log(curr);
      }
      if (element.capital === undefined) {
        console.log("no capital for this country");
      } else {
        console.log(element.capital);
      }
      console.log(element);
      let card = document.createElement("div");
      card.classList.add("col-lg-3", "col-md-4", "col-sm-6", "card");
      card.innerHTML = `
        <img src=${element.flags.png} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">${element.name.official}</h5>
          <p class="card-text">
            ${element.maps.googleMaps}
          </p>
          <div/>
          <div class="card-footer text-center">
  <div class="btn-group">
    <a href="#" class="btn btn-primary" style="background-image: url('${element.flags.png}')">${element.region}</a>
    <a href="#" class="btn btn-primary" style="background-image: url('${element.flags.png}')">${element.capital}</a>
    <a href="#" class="btn btn-primary" style="background-image: url('${element.flags.png}')">${curr}</a>
  </div>
</div>
      `;
      container.appendChild(card);
    });
    document.getElementById("container").appendChild(container);
  });
