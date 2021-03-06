import Authentication from './index'

jest.mock('./adalConfig', () => ({
  getAuthContext: jest.fn().mockImplementation(() => ({
    logOut: jest.fn(),
    getCachedUser: jest.fn()
  }))
}))

describe('Authorization constructor', () => {
  const config = { adal: { tenant: 'tenant', clientId: 'id' } }
  const authentication = new Authentication({ config, t: () => {} })

  it('should trigger logout correctly', () => {
    expect(authentication.logout()).toBe(true)
  })

  it('should trigger isAuthenticated correctly', () => {
    authentication.authContext.getCachedUser.mockImplementation(() => ({
      username: 'username'
    }))

    expect(authentication.isAuthenticated()).toBe(true)
  })

  it('should trigger getUserData correctly', () => {
    expect(authentication.getUserData()).toEqual({ username: 'username' })
  })

  it('should trigger isAuthenticated correctly', () => {
    authentication.authContext.getCachedUser.mockImplementation(() => false)
    expect(authentication.isAuthenticated()).toBe(false)
  })
})
