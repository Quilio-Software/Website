from django.http import JsonResponse
from .models import EmailForm
from django.views.decorators.csrf import csrf_protect
from django.core.mail import send_mail


def create_email_form(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        phone = request.POST.get('phone', None)
        message = request.POST.get('message', None)
        accept_terms = request.POST.get('accept_terms', False)

        email_form = EmailForm(
            name=name,
            email=email,
            phone=phone,
            message=message,
            accept_terms=accept_terms
        )
        email_form.save()

        # Send the email
        send_mail(
            'New Contact Form Submission',
            f"Name: {email_form.name}\nEmail: {email_form.email}\nPhone: {email_form.phone}\nMessage: {email_form.message}",
            'from@example.com',  # Replace with your sender's email
            ['to@example.com'],  # Replace with recipient's email
            fail_silently=False,
        )

        response = JsonResponse({'message': 'Form submitted successfully!'})
        # Set the CORS header
        response['Access-Control-Allow-Origin'] = 'http://localhost:5173'
        response['Access-Control-Allow-Credentials'] = 'true'
        return response
    else:
        response = JsonResponse(
            {'message': 'Invalid request method'}, status=400)
        # Set the CORS header
        response['Access-Control-Allow-Origin'] = 'http://localhost:5173'
        response['Access-Control-Allow-Credentials'] = 'true'
        return response
