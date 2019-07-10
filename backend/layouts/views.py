from django.http import Http404
from django.shortcuts import HttpResponse,render

from .models import Layout

def view(request, layout_id):
    try:
        layout = Layout.objects.get(pk=layout_id)
        context = {'layout': layout}
    except:
        raise Http404("Layout not found.")
    return render(request, 'layouts/view.html', context)

