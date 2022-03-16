export default class UrlValidation {
  constructor(url) {
    let domain = url.value.split('.');
    let type = domain.length > 3 ? domain[2] + '.' + domain[3] : domain[2];
    const msgUrl = document.getElementById('msg--url');
    console.log(url);
    console.log(msgUrl);

    if (this.domains(type)) {
      console.log('true');
      url.classList.add('is-valid');
      url.classList.remove('is-invalid');

      msgUrl.classList.add('valid-feedback');
      msgUrl.classList.remove('invalid-feedback');

      msgUrl.innerText = 'Looks good!';

      // msgUrl.innerHTML = this.successMsg();
    } else {
      console.log('false');

      url.classList.add('is-invalid');
      url.classList.remove('is-valid');
      msgUrl.classList.add('invalid-feedback');
      msgUrl.classList.remove('valid-feedback');
      msgUrl.innerText = 'Please provide a valid';

      // msgUrl.innerHTML = this.errorMsg();
    }
  }

  successMsg() {
    return `<div class="valid-feedback">Looks good!</div>`;
  }

  errorMsg() {
    return ` <div class="invalid-feedback">Please provide a valid city.</div>`;
  }

  //   mencari apakah data yang sudah dipisah aada di dalam array untuk digoreng
  domains(params) {
    let domains = ['com', 'co.id', 'xyz', 'org'];
    let dom = domains.find((row) => {
      return row == params;
    });
    const res = dom ? true : false;
    return res;
  }
}
