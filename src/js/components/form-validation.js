const inputsTel = document.querySelectorAll('input[type="tel"]');
const form = document.querySelector('.form-section__form');

if(form) {
  let im = new Inputmask({"mask": '+7 (999) 999-99-99',removeMaskOnSubmit: true,});

  im.mask(inputsTel);
  
  // validation
  const validationForm = (selector, rules, messages) => {
    new window.JustValidate(selector, {
      rules: rules,
      messages: messages,
      submitHandler: function(form, values, ajax) {
        console.log(values);
      }
    });
  };
  
  validationForm('.form-section__form', {
    name: { required: true },
    phone: { required: true, minLength: 10 },
  }, {
    name: {
      required: 'Как вас зовут?'
    },
    phone: {
      required: 'Укажите номер для связи',
      minLength: 'Укажите номер формата +7 (999) 999-99-99'
    }
  });
}