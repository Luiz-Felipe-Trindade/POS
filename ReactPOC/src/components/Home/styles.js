import styled from 'styled-components'

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
background: #F6FBFF;
`

export const Card = styled.div`
  background: #fff;                    
  padding: 2rem;                       
  border-radius: 8px;                  
  box-shadow: 0 10px 15px rgba(0,0,0,0.1);  
  text-align: center;                  
  width: 100%;
  max-width: 400px;                   
`
export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.5rem
`

export  const Subtitle = styled.p`
color: #6b7280;
font-size: 1rem;
margin-bottom: 2rem;

`
export const Button = styled.button`
  display: block;
  width: 100%;          
  padding: 0.75rem;     
  font-size: 1rem;      
  border-radius: 6px;   
  cursor: pointer;      
  margin-top: 0.5rem;   
  transition: background 0.2s;

  background: ${({ variant }) =>
    variant === 'primary' ? '#111827' : '#fff'};
  color: ${({ variant }) =>
    variant === 'primary' ? '#fff' : '#111827'};
  border: ${({ variant }) =>
    variant === 'primary' ? 'none' : '1px solid #d1d5db'};
  &:hover {
    background: ${({ variant }) =>
      variant === 'primary' ? '#1f2937' : '#f3f4f6'};
  }
`