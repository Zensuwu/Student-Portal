document.querySelectorAll('.tel').forEach(input => {
    input.addEventListener('input', () => {
        // Keep only digits, trim to 11 characters
        input.value = input.value.replace(/\D/g, '').slice(0, 11);
    });
});

document.querySelectorAll('.text').forEach(input => {
    input.addEventListener('input', () => {
      input.value = input.value.toUpperCase();
    });
  });  