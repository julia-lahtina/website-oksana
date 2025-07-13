import React from "react";
import { Container } from "../../components/Container";

export const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#eee2f9dc", // немного темнее body
        color: "#333",
        padding: "24px 0",
        marginTop: "60px",
        fontSize: "14px",
        borderTop: "1px solid #d2bfe7"
      }}
    >
      <Container>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "12px",
            textAlign: "center"
          }}
        >
          <div style={{ display: "flex", gap: "20px", flexDirection: 'column' }}>
            <div style={{ display: 'flex', gap: '10px' }}>
              <a href="/impressum" style={{ color: "#333", textDecoration: "none" }}>
                Impressum
              </a>
              <a href="/datenschutz" style={{ color: "#333", textDecoration: "none" }}>
                Datenschutzerklärung
              </a>
            </div>
            <div>
              © 2025 Oksana Khegai - All Rights Reserved<br />
              {/* <span style={{ color: "#6e6e6e" }}>Created by Julia Lakhtin</span> */}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};
