from django.contrib import admin
from escola.models import Aluno

class Alunos(admin.ModelAdmin):
    list_display = ("id", "nome", "cpf", "email")
    list_display_links = ("id", "nome")
    search_fields = ("nome", "cpf")

admin.site.register(Aluno, Alunos)