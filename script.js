$(document).ready(function() {
    $('#registration-form').on('submit', function(e) {
        e.preventDefault();

        // Validate the form fields
        var isValid = true;
        $('input').each(function() {
            if ($(this).val() === '') {
                isValid = false;
                alert('Please fill all fields!');
                return false;
            }
        });

        // If the form is valid, submit it
        if (isValid) {
            $(this).unbind('submit').submit();
        }
    });
});
