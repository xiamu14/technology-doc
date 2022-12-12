import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background: white;
  padding-left: var(--sidebar-width);
  padding-right: var(--sidebar-width);
  border-top: 1px solid white;
  margin-top: var(--navbar-height);
`;

export const EditLink = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 6px;
  margin-top: 80px;
  font-size: 14px;
  color: var(--primary-color);
`;
