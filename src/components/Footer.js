import React from "react";

//working in the background of props
// const props = {
//   contacts: [
//     "123 Fake Street, London, E1 4UD",
//     "hello@fakehotel.com",
//     "0123 456789",
//   ],
// };
// console.log(props.contact);

const Footer = (props) => {
  console.log(props);

  return (
    <div className="footer">
      <ul>
        {props.contacts.map((contact) => (
          <li>{contact}</li>
        ))}
        {/* //loop over the array using the positions in the array */}
      </ul>
    </div>
  );
};

export default Footer;
