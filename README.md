Frontend:
- Pages:
1) "Home" - Basic homepage
2) "Phones" - List of all the phones, includes search bar
3) "PhoneDetails" - Page displaying more details about specific phone based on ID
- Components:
1) "Navbar" - Displaying on each page
2) "PhoneCard" - Displaying phone details for Phones and PhoneDetails page, different based on where it's called from

Backend:
- Routes:
1) GET - "/phones" - Returns list with all phones
2) GET - "/phones/:id" - Returns one phone based on ID