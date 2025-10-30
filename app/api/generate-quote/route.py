# app/api/generate-quote/route.py
from http.server import BaseHTTPRequestHandler
from fpdf import FPDF
import json

class handler(BaseHTTPRequestHandler):
    def do_POST(self):
        content_length = int(self.headers['Content-Length'])
        post_data = self.rfile.read(content_length)
        data = json.loads(post_data)
        
        pdf = FPDF()
        pdf.add_page()
        pdf.set_font("Helvetica", size=16)
        pdf.cell(0, 10, f"Quote for: {data.get('customer_name', 'N/A')}", new_x="LMARGIN", new_y="NEXT", align='C')
        pdf.ln(10)
        
        pdf.set_font("Helvetica", 'B', 12)
        pdf.cell(150, 10, 'Description', border=1)
        pdf.cell(40, 10, 'Price', border=1, new_x="LMARGIN", new_y="NEXT")
        
        pdf.set_font("Helvetica", '', 12)
        for item in data.get('line_items', []):
            pdf.cell(150, 10, item.get('item', ''), border=1)
            pdf.cell(40, 10, f"${item.get('price', '0.00')}", border=1, new_x="LMARGIN", new_y="NEXT")
            
        pdf.set_font("Helvetica", 'B', 12)
        pdf.cell(150, 10, 'Total', border=1)
        pdf.cell(40, 10, f"${data.get('total_cost', '0.00')}", border=1, new_x="LMARGIN", new_y="NEXT")
        
        pdf_output = pdf.output(dest='S').encode('latin-1')
        
        self.send_response(200)
        self.send_header('Content-type', 'application/pdf')
        self.send_header('Content-Disposition', 'attachment; filename="quote.pdf"')
        self.end_headers()
        self.wfile.write(pdf_output)
        return
