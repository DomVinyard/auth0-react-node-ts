import { useAuth0 } from '@auth0/auth0-react';
import { useEffect, useState } from 'react';

function App() {
  const API_URL = 'https://checkauth.domvinyard.repl.co';
  const { isLoading, isAuthenticated, error, user, loginWithRedirect } =
    useAuth0();
  const { getAccessTokenSilently } = useAuth0();
  const [token, setToken] = useState('');
  const [wasUnauthenticated, setWasUnauthenticated] = useState(false);

  // After we fetch the token, save it into state.
  // (In production we'd save it into a cookie
  // but for this demo we don't need to store it
  useEffect(() => {
    const doTokenUpdate = async () => {
      setToken(await getAccessTokenSilently({ claim: 'read:data' }));
    };
    isAuthenticated && doTokenUpdate();
  }, [getAccessTokenSilently, isAuthenticated, user]);

  const getSecureThingFromServer = async () => {
    try {
      const token = await getAccessTokenSilently({ claim: 'read:data' });
      const headers = { Authorization: `Bearer ${token}` };
      const response = await fetch(API_URL, { headers });
      alert(await response.text());
    } catch (e) {
      alert(await e);
      setTimeout(() => setWasUnauthenticated(true), 500);
    }
  };

  return isLoading ? (
    <div style={{ margin: '2rem' }}>Loading</div>
  ) : error ? (
    <div>Oops... {error.message}</div>
  ) : (
    <div style={{ maxWidth: 380 }}>
      <div style={{ margin: '2rem' }}>
        {isAuthenticated && (
          <div style={{ marginBottom: '5rem' }}>
            <h1>💫 Whoa!</h1>
            <p>
              What happened there? Well, we sent you to Google's auth server and
              they sent you back again with a special token.
            </p>
            <p>
              Google have told us that your name is assured us that nobody else
              could have this specific token, only someone named{' '}
              <code
                style={{
                  backgroundColor: '#ddd',
                  padding: 2,
                  fontSize: 12,
                  display: 'inline-block',
                }}
              >
                {user?.name}
              </code>
              . This is what your token looks like, it was literally generated
              just now, just for you:
              <p
                style={{
                  backgroundColor: '#ddd',
                  padding: 10,
                  fontSize: 12,
                  overflowX: 'hidden',
                }}
              >
                <code>🔑{token}</code>
              </p>
            </p>
            <p>Nice isn't it. They run the world, these things.</p>
            Now, every time you request data from our api we will inspect your
            token. If you try to look at something we don't want you seeing then
            we will stop you.
          </div>
        )}
        <div style={{ marginBottom: '1rem' }}>
          This button will fetch the secret code from our api.
        </div>
        <button onClick={getSecureThingFromServer}>
          🔒 Fetch the secret code
        </button>
        {wasUnauthenticated && (
          <div>
            <div style={{ marginTop: '2rem', marginBottom: '1rem' }}>
              Nope. That's a secure endpoint. It needs a token. Where can we get
              a token from?
            </div>
            <button onClick={loginWithRedirect}>🔑 Log in (get a token)</button>
          </div>
        )}
        {isAuthenticated && (
          <div style={{ marginTop: '4rem', opacity: 0.5 }}>
            Refresh to logout (no cookie was stored)
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
