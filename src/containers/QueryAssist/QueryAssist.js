import React, { Component } from 'react'
import styled from 'react-emotion'
import { injectGlobal } from 'emotion'
import QueryAssist from 'react-query-assist'
import { observer } from 'controllerim';
import AppController from '../../AppController'
import Display from "../Display/Display";

injectGlobal`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: -apple-system, sans-serif;
  }
`

const Container = styled('div')`
  background: #282B37;
  width: 100vw;
  height: 15vh;
  padding: 20px;
`

const Title = styled('h2')`
  color: #FFFFFF;
  margin-bottom: 15px;
  font-weight: 600;
`

const Assist = styled(QueryAssist)`
  margin-bottom: 50px;
`

const Footer = styled('div')`
  padding: 15px;
  text-align: center;
`

export const Link = styled('a')`
  display: inline-block;
  background: #6554AF;
  border: 1px solid #58499B;
  border-radius: 4px;
  color: #FFFFFF;
  font-weight: 300;
  text-decoration: none;
  padding: 7px 15px;
  cursor: pointer;
`

const data = [
    {
        name: 'Find',
        type: 'string',
        enumerations: ['equities', 'bonds', 'private company', 'start ups']
    },
    {
        name: 'Where',
        type: 'string',
        enumerations: ['revenues', 'profits', 'market cap']
    },
    {
        name: 'is',
        type: 'string',
        enumerations: ['greater', 'less', 'equal']
    },
    {
        name: '$',
        type: 'int',
        enumerations: ['1000000','1000000000']
    }
]

class AssistSearch extends Component {

    componentWillMount() {
        this.controller = new AppController(this);
    }



    render () {
        const inputProps = {
            bg: '#393B4A',
            border: '1px solid #1F1E21',
            borderRadius: '4px',
            color: '#9FA2B2',
            placeholderColor: 'rgba(255, 255, 255, 0.2)',
            tokenColor: '#FFFFFF',
            fontSize: '16px',
            fontWeight: 300,
            fontFamily: 'monospace',
            lineHeight: '20px',
            p: '15px 20px'
        }

        const dropdownProps = {
            bg: '#808498',
            borderRadius: '2px',
            fontSize: '14px',
            fontWeight: 400,
            fontFamily: '-apple-system, sans-serif'
        }

        const selectorProps = {
            bg: '#6554AF',
            border: '1px solid #58499B',
            color: '#FFFFFF'
        }

        const footer = () => (
            <Footer>
                <Link
                    target='_blank'
                    href='https://timber.io/docs/app/console/searching'>
                    Learn more
                </Link>
            </Footer>
        )

        return (
            <Container>
                <Title>Warren</Title>
                <Assist
                    placeholder='Search Logs ⌘ ⇧ F'
                    onSubmit={query => {this.controller.setMessage(query); console.log(`-----> ${this.controller.getMessage()}`)}}
                    data={data}
                    inputProps={inputProps}
                    dropdownProps={dropdownProps}
                    selectorProps={selectorProps}
                    footerComponent={footer} />
                <Display/>
            </Container>
        )
    }
}

export default observer(AssistSearch);