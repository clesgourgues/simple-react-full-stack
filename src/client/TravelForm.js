import React from 'react';
import { Formik } from 'formik';
import {
  Button, ButtonGroup, Label, Input, Row, Col
} from 'reactstrap';
import Globalize from 'globalize';
import globalizeLocalizer from 'react-widgets-globalize';
import DateTimePicker from 'react-widgets/lib/DateTimePicker';
import Multiselect from 'react-widgets/lib/Multiselect';
import Combobox from 'react-widgets/lib/Combobox';

import * as Yup from 'yup';

// Globalize.locale('fr');

const TravelForm = ({ destinations }) => {
  globalizeLocalizer();
  const monthYearFormatter = Globalize.dateFormatter({ raw: 'mmm YY' });
  const monthYearParser = Globalize.dateParser({ raw: 'mmm YY' });
  return (
    <Formik
      initialValues={{ email: '' }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 500);
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email()
          .required('Required')
      })}
    >
      {(props) => {
        const {
          values,
          touched,
          errors,
          dirty,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset
        } = props;
        return (
          <form onSubmit={handleSubmit}>
            <Row>
              <Col className="mt-2">
                {/*                 <Input
                  id="email"
                  placeholder="Enter your email"
                  type="text"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.email && touched.email ? 'text-input error' : 'text-input'}
                />
                {errors.email && touched.email && (
                  <div className="input-feedback">{errors.email}</div>
                )} */}
                <Label for="start">Ville de départ</Label>
                <Combobox
                  id="start"
                  data={destinations}
                  onSelect={handleChange}
                  // value={values.start}
                  textField="name"
                  valueField="name"
                />
                <Label for="stops">Etapes</Label>
                <Multiselect
                  id="stops"
                  data={destinations}
                  textField="name"
                  onSelect={handleChange}
                  value={values.stops}
                  valueField="name"
                />
              </Col>
            </Row>
            <Row>
              <Col className="mt-2">
                <DateTimePicker format={monthYearFormatter} parse={monthYearParser} />
              </Col>
            </Row>
            <Row>
              <ButtonGroup>
                <Col sm="6" className="mt-2">
                  <Button color="info" onClick={handleReset} disabled={!dirty || isSubmitting}>
                    Reset
                  </Button>
                </Col>
                <Col sm="6" className="mt-2">
                  <Button color="success" type="submit" disabled={isSubmitting}>
                    Submit
                  </Button>
                </Col>
              </ButtonGroup>
            </Row>
          </form>
        );
      }}
    </Formik>
  );
};

export default TravelForm;
