import React from 'react'

const Accordion = () => {
  return (
    <section className="accordion">
                <div className="tab">
                    <input type="checkbox" name="accordion-1" id="cb1"  />
                    <label htmlFor="cb1" className="tab__label">Checkbox</label>
                    <div className="tab__content">
                    <p>Pure CSS accordion based on the "input:checked + label" style trick.</p>
                    </div>
                </div>
                <div className="tab">
                    <input type="checkbox" name="accordion-1" id="cb2" />
                    <label htmlFor="cb2" className="tab__label">Open multiple</label>
                    <div className="tab__content">
                    <p>Using <code>&lt;input type="checkbox"&gt;</code> allows to have several tabs open at the same time.</p>
                    </div>
                </div>
            </section>
  )
}

export default Accordion