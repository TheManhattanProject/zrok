// Code generated by go-swagger; DO NOT EDIT.

package rest_model

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"context"

	"github.com/go-openapi/strfmt"
	"github.com/go-openapi/swag"
)

// EnableRequest enable request
//
// swagger:model enableRequest
type EnableRequest struct {

	// token
	Token string `json:"token,omitempty"`
}

// Validate validates this enable request
func (m *EnableRequest) Validate(formats strfmt.Registry) error {
	return nil
}

// ContextValidate validates this enable request based on context it is used
func (m *EnableRequest) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	return nil
}

// MarshalBinary interface implementation
func (m *EnableRequest) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *EnableRequest) UnmarshalBinary(b []byte) error {
	var res EnableRequest
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}