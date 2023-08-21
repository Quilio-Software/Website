from django.db import models


class EmailForm(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()
    phone = models.CharField(max_length=20, blank=True, null=True)
    message = models.TextField(blank=True, null=True)
    accept_terms = models.BooleanField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Contact Form Submission by {self.name} at {self.created_at}"
