import { loadUA } from './actions'

describe('testing actions', () => {
  test('loadUA', (done) => {
    const get = jest.fn()
    const data = {}
    get.mockReturnValue(Promise.resolve({data}))

    let callNumer = 0
    const dispatch = jest.fn(params => {
      if(callNumer === 0) {
        expect(params).toEqual({ type: 'LOAD_UA_REQUEST' })
      }
      if(callNumer === 1) {
        expect(params).toEqual({
          type: 'LOAD_UA_SUCCESS',
          data: data
        })
        done()
      }
      callNumer++
    })

    const axiosMock = {
      get
    }
    loadUA(axiosMock)(dispatch)

  })
})