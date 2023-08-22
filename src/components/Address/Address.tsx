import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { contactItems } from "../../utils/data";


const Address = (): JSX.Element => {
  return (
    <section id="address">
      <address className="address">
        <h2>Contacts</h2>
        {contactItems.map((item) => (
          <dl key={item.id} className="address__item">
            <dt className="icon-item">
              <span>
                <FontAwesomeIcon icon={item.icon} />
              </span>
            </dt>
            <dd className={`content-item${(item.titleText != null) ? "" : " strong"}`}>
              {(item.titleText != null) && <strong>{item.titleText}</strong>}
              <a href={item.link}>{item.displayText}</a>
            </dd>
          </dl>
        ))}
      </address>
    </section>
  );
};

export default Address;