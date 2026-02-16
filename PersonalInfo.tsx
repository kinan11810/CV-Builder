import React, { useContext, useEffect } from 'react';
import SectionWrapper from '../../../components/SectionWrapper';
import countriesData from '../../../data/countries.json';
import { CVContext } from '../../../context/CVContext';

const PersonalInfo = () => {
  const { data, setData } = useContext(CVContext);
  const personal = data.personalInfo;

  // تحديث Country Code تلقائيًا عند تغيير البلد
  useEffect(() => {
    const selected = countriesData.find(c => c.name === personal.country);
    if (selected && selected.code !== personal.countryCode) {
      setData(prev => ({
        ...prev,
        personalInfo: { ...prev.personalInfo, countryCode: selected.code },
      }));
    }
  }, [personal.country]);

  return (
    <SectionWrapper title="Personal Information">
      <form style={{ display: 'grid', gap: '12px' }}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            value={personal.firstName}
            onChange={e =>
              setData(prev => ({
                ...prev,
                personalInfo: { ...prev.personalInfo, firstName: e.target.value },
              }))
            }
            placeholder="First Name"
          />
        </div>

        <div>
          <label>Last Name:</label>
          <input
            type="text"
            value={personal.lastName}
            onChange={e =>
              setData(prev => ({
                ...prev,
                personalInfo: { ...prev.personalInfo, lastName: e.target.value },
              }))
            }
            placeholder="Last Name"
          />
        </div>

        <div>
          <label>Country:</label>
          <select
            value={personal.country}
            onChange={e =>
              setData(prev => ({
                ...prev,
                personalInfo: { ...prev.personalInfo, country: e.target.value },
              }))
            }
          >
            {countriesData.map(c => (
              <option key={c.name} value={c.name}>
                {c.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label>Country Code:</label>
          <input type="text" value={personal.countryCode} readOnly />
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            value={personal.email}
            onChange={e =>
              setData(prev => ({
                ...prev,
                personalInfo: { ...prev.personalInfo, email: e.target.value },
              }))
            }
            placeholder="Email"
          />
        </div>

        <div>
          <label>Phone Number:</label>
          <input
            type="tel"
            value={personal.phone}
            onChange={e =>
              setData(prev => ({
                ...prev,
                personalInfo: { ...prev.personalInfo, phone: e.target.value },
              }))
            }
            placeholder="Phone Number"
          />
        </div>

        <div>
          <label>Address:</label>
          <input
            type="text"
            value={personal.address}
            onChange={e =>
              setData(prev => ({
                ...prev,
                personalInfo: { ...prev.personalInfo, address: e.target.value },
              }))
            }
            placeholder="Address"
          />
        </div>

        <div>
          <label>City:</label>
          <input
            type="text"
            value={personal.city}
            onChange={e =>
              setData(prev => ({
                ...prev,
                personalInfo: { ...prev.personalInfo, city: e.target.value },
              }))
            }
            placeholder="City"
          />
        </div>

        <div>
          <label>Postal Code:</label>
          <input
            type="text"
            value={personal.postalCode}
            onChange={e =>
              setData(prev => ({
                ...prev,
                personalInfo: { ...prev.personalInfo, postalCode: e.target.value },
              }))
            }
            placeholder="Postal Code"
          />
        </div>
      </form>
    </SectionWrapper>
  );
};

export default PersonalInfo;
